import { Component, OnInit } from "@angular/core";
import { AppearStage } from "projects/packages/src/public-api";
import {
  SampleActorEvent,
  SampleActorEventType,
} from "~/dev/app/modules/example/common/sample-actor/types";

@Component({
  selector: "example-lazy-actor",
  templateUrl: "./lazy-actor.component.html",
  styleUrls: ["./lazy-actor.component.scss"],
})
export class LazyActorComponent implements OnInit {
  constructor() {}

  actorMakeList: any[];
  appearStage: AppearStage;

  ngOnInit() {
    this.actorMakeList = Array.from(Array(50)).map((a, b) => {
      return { id: b };
    });
    this.appearStage = new AppearStage();
    this.appearStage.init();
  }

  onSampleAppearEvent(evt: SampleActorEvent) {
    const { type, actor } = evt;
    switch (type) {
      case SampleActorEventType.ATTACH:
        this.appearStage.observe(actor);
        break;
      case SampleActorEventType.DETACH:
        this.appearStage.unobserve(actor);
        break;
    }
  }

  ngOnDestroy() {
    try {
      if (this.appearStage) {
        this.appearStage.dispose();
        this.appearStage = null;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
