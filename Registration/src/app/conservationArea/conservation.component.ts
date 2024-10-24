import { Component } from "@angular/core";
import { Reservation } from "../model/reservation.model";
import { ReservationRepository } from "../model/reservation.repository";

@Component({
  selector: "conservation",
  templateUrl: "conservation.component.html"
})
export class ConservationComponent {
  constructor(private repository: ReservationRepository) { }
  get reservations(): Reservation[] {
    return this.repository.getReservations();
  }
  get area(): string[] {
    return this.repository.getArea();
  }
}