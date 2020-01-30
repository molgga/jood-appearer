import { Component } from "@angular/core";

import { AppearStage } from "projects/packages/src/public-api";
// import { AppearStage } from "dist/packages";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "dev";

  testStage: AppearStage;

  testList: any[] = [];

  handleAddBox() {
    this.adds();
  }

  handleRemoveBox() {
    this.removes();
  }

  adds() {
    for (let i = 0; i < 30; i++) {
      this.testList.push({
        i,
        n: Date.now()
      });
    }
  }

  removes() {
    for (let i = 0; i < 30; i++) {
      if (this.testList.length <= 0) break;
      this.testList.pop();
    }
  }

  ngOnInit() {
    const option1 = { rootMargin: "50% 0px" };
    const option2 = { threshold: [0, 0.5] };
    this.testStage = new AppearStage();
    this.testStage.init(option2);
    this.adds();
  }

  onItemEvent(evt: { type: string; actor: any }) {
    if (evt.type === "init") {
      this.testStage.observe(evt.actor);
    } else if (evt.type === "destroy") {
      this.testStage.unobserve(evt.actor);
    }
  }
}
