import { Injectable } from "@angular/core";
import { ILayoutService } from "~/dev/app/modules/layout/service/types";

@Injectable({
  providedIn: "root",
})
export class ExampleLayoutService implements ILayoutService {
  appTitle = "@jood/appearer";
  getPublishList() {
    return [
      {
        label: "Github",
        icon: "code",
        url: "https://github.com/molgga/jood-appearer",
      },
      {
        label: "NPM",
        icon: "move_to_inbox",
        url: "https://www.npmjs.com/package/@jood/appearer",
      },
      {
        label: "Docs",
        icon: "library_books",
        url: "https://molgga.github.io/jood-appearer/documents",
      },
    ];
  }
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
