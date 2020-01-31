import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  HostBinding,
  Input
} from "@angular/core";

import {
  BaseActor,
  OnceActor,
  LazyActor,
  AppearEvent
} from "projects/packages/src/public-api";
import { Subscription } from "rxjs";

@Component({
  selector: "box-item",
  templateUrl: "./box-item.component.html",
  styleUrls: ["./box-item.component.scss"]
})
export class BoxItemComponent {
  constructor(private elRef: ElementRef) {}

  actor: BaseActor;

  @Input()
  item: any;

  @Input()
  testCase: string = "base-actor";

  @Output("testEvent")
  eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class.is-appear")
  get isAppear() {
    return !!(this.actor && this.actor.isAppear);
  }

  appearEvent$: Subscription | any;

  ngOnInit() {
    const { nativeElement } = this.elRef;

    switch (this.testCase) {
      case "once-actor":
        this.actor = new OnceActor(nativeElement);
        break;
      case "lazy-actor":
        this.actor = new LazyActor(nativeElement);
        (this.actor as LazyActor).setCheckoutDelay(1000);
        (this.actor as LazyActor).setAppearDelay(100);
        // (this.actor as LazyActor).setCheckoutDelay(0);
        // (this.actor as LazyActor).setAppearDelay(100);
        break;
      default:
        this.actor = new BaseActor(nativeElement);
        break;
    }

    this.appearEvent$ = this.actor.events.subscribe(
      this.onAppearEvent.bind(this)
    );

    this.eventEmitter.emit({
      type: "init",
      actor: this.actor
    });
  }

  onAppearEvent(evt: AppearEvent) {
    switch (evt.type) {
      case AppearEvent.APPEAR:
        switch (this.testCase) {
          case "once-actor":
          case "lazy-actor":
            this.appearEvent$.unsubscribe();
            this.actor.dispose();
            break;
        }

        break;
      case AppearEvent.DISAPPEAR:
        break;
    }
  }

  ngOnDestroy() {
    this.eventEmitter.emit({
      type: "dispose",
      actor: this.actor
    });
    if (this.appearEvent$) {
      this.appearEvent$.unsubscribe();
    }
    if (this.actor) {
      this.actor.dispose();
      this.actor = null;
    }
  }
}
