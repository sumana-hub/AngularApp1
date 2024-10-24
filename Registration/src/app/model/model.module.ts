import { NgModule } from "@angular/core";
import { ReservationRepository } from "./reservation.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
  providers: [ReservationRepository, StaticDataSource]
})
export class ModelModule { }