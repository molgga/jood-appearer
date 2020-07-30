import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoutingModule } from "~/dev/app/pages/example/example.routing";
import { SharedModule } from "~/dev/app/shared/shared.module";
import { ExampleCommonModule } from "~/dev/app/modules/example/common/common.module";
import { BaseActorComponent } from "./base-actor/base-actor.component";
import { OnceActorComponent } from "./once-actor/once-actor.component";
import { LazyActorComponent } from "./lazy-actor/lazy-actor.component";

@NgModule({
  imports: [CommonModule, RoutingModule, SharedModule, ExampleCommonModule],
  declarations: [BaseActorComponent, OnceActorComponent, LazyActorComponent],
})
export class PageModule {}
