import { Subscription } from "rxjs";
import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from "@angular/core";
import {
  Actor,
  OnceActor,
  LazyActor,
  BaseActor,
  AppearEvent,
} from "projects/packages/src/public-api";
import {
  SampleActorType,
  SampleActorEvent,
  SampleActorEventType,
} from "~/dev/app/modules/example/common/sample-actor/types";

@Component({
  selector: "sample-actor",
  templateUrl: "./sample-actor.component.html",
  styleUrls: ["./sample-actor.component.scss"],
})
export class SampleActorComponent implements OnInit {
  constructor(private elRef: ElementRef) {
    this.appearerListener = new Subscription();
  }

  actor: Actor;
  appearerListener: Subscription;

  @Input()
  item: any;

  @Input()
  actorType: SampleActorType;

  @Output("sampleEvent")
  emitter: EventEmitter<SampleActorEvent> = new EventEmitter();

  @HostBinding("class.is-appeared")
  get isAppeared() {
    return !!(this.actor && this.actor.isAppear);
  }

  ngOnInit() {
    const { nativeElement } = this.elRef;
    switch (this.actorType) {
      case SampleActorType.ONCE:
        this.actor = new OnceActor(nativeElement);
        break;
      case SampleActorType.LAZY:
        this.actor = new LazyActor(nativeElement);
        this.actor.setCheckoutDelay(1000);
        this.actor.setAppearDelay(200);
        break;
      default:
        this.actor = new BaseActor(nativeElement);
        break;
    }

    const observeAppearEvent = this.actor.events.subscribe(
      this.onAppearEvent.bind(this)
    );
    this.appearerListener.add(observeAppearEvent);
    this.emitter.emit({
      type: SampleActorEventType.ATTACH,
      actor: this.actor,
    });
  }

  appearCount: number = 0;
  disappearCount: number = 0;

  onAppearEvent(evt: AppearEvent) {
    switch (evt.type) {
      case AppearEvent.APPEAR:
        this.appearCount++;
        break;
      case AppearEvent.DISAPPEAR:
        this.disappearCount++;
        break;
    }
  }

  ngOnDestroy() {
    try {
      this.emitter.emit({
        type: SampleActorEventType.DETACH,
        actor: this.actor,
      });
      if (this.appearerListener) {
        this.appearerListener.unsubscribe();
      }
    } catch (err) {
      console.log(err);
    }
  }
}
