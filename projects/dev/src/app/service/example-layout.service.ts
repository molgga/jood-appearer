import { Injectable } from "@angular/core";
import { ILayoutService } from "~/dev/app/modules/layout/service/types";

@Injectable({
  providedIn: "root",
})
export class ExampleLayoutService implements ILayoutService {
  appTitle = "@jood/appearer";
  getMenuList() {
    return [
      {
        label: "Demo",
        children: [
          {
            href: "/demo/base-actor",
            label: "base-actor",
          },
          {
            href: "/demo/once-actor",
            label: "once-actor",
          },
          {
            href: "/demo/lazy-actor",
            label: "lazy-actor",
          },
        ],
      },
    ];
  }
}
