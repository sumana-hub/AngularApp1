import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { ConservationComponent } from "./conservation.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [ModelModule, CommonModule, FormsModule],
  declarations: [ConservationComponent],
  exports: [ConservationComponent]
})
export class ConservationModule { }