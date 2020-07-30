import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseActorComponent } from "./base-actor/base-actor.component";
import { OnceActorComponent } from "./once-actor/once-actor.component";
import { LazyActorComponent } from "./lazy-actor/lazy-actor.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "base-actor",
        component: BaseActorComponent,
      },
      {
        path: "once-actor",
        component: OnceActorComponent,
      },
      {
        path: "lazy-actor",
        component: LazyActorComponent,
      },
      {
        path: "**",
        component: BaseActorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
