import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { ConservationComponent } from "./conservation.component";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [ConservationComponent],
  exports: [ConservationComponent]
})
export class ConservationModule { }