import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SampleActorComponent } from "~/dev/app/modules/example/common/sample-actor/sample-actor.component";

@NgModule({
  imports: [CommonModule],
  exports: [SampleActorComponent],
  declarations: [SampleActorComponent],
})
export class ExampleCommonModule {}
