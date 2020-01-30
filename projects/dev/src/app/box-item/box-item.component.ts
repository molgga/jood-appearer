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
// import { BaseActor, OnceActor, LazyActor, AppearEvent } from "dist/packages";

@Component({
  selector: "box-item",
  templateUrl: "./box-item.component.html",
  styleUrls: ["./box-item.component.scss"]
})
export class BoxItemComponent implements OnInit {
  constructor(private elRef: ElementRef) {}

  actor: BaseActor;

  @Input()
  item: any;

  @Output("testEvent")
  eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class.is-appear")
  isAppear: boolean = false;

  appearEvent$: Subscription;

  ngOnInit() {
    const { nativeElement } = this.elRef;

    // this.actor = new BaseActor(nativeElement);
    this.actor = new OnceActor(nativeElement);

    // this.actor = new LazyActor(nativeElement);
    // (this.actor as LazyActor).setCheckoutDelay(1000);
    // (this.actor as LazyActor).setAppearDelay(200);

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
        this.isAppear = true;
        // this.appearEvent$.unsubscribe();
        // this.appearEvent$ = null;
        // this.actor.destroy();
        // this.actor = null;
        break;
      case AppearEvent.DISAPPEAR:
        this.isAppear = false;
        break;
    }
  }

  ngOnDestroy() {
    this.eventEmitter.emit({
      type: "destroy",
      actor: this.actor
    });

    if (this.appearEvent$) {
      this.appearEvent$.unsubscribe();
    }

    if (this.actor) {
      this.actor.destroy();
      this.actor = null;
    }
  }
}
