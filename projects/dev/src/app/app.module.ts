import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BoxItemComponent } from "./box-item/box-item.component";

@NgModule({
  declarations: [AppComponent, BoxItemComponent],
  imports: [BrowserModule, AppRoutingModule, ScrollingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
