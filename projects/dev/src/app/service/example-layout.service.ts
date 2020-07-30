import { Injectable } from "@angular/core";
import { ILayoutService } from "~/dev/app/modules/layout/service/types";

@Injectable({
  providedIn: "root",
})
export class ExampleLayoutService implements ILayoutService {
  appTitle = "appTitle";
  getMenuList() {
    return [
      {
        label: "Examples",
        children: [
          {
            href: "/example/base-actor",
            label: "base-actor",
          },
          {
            href: "/example/once-actor",
            label: "once-actor",
          },
          {
            href: "/example/lazy-actor",
            label: "lazy-actor",
          },
        ],
      },
    ];
  }
}
