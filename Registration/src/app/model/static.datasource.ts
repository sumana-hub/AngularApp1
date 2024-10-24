import { Injectable } from "@angular/core";
import { Reservation } from "./reservation.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
  private reservations: Reservation[] = [
    new Reservation(1, "timeslot 1", "area 1", "timeslot 1 (area 1)", 100),
    new Reservation(2, "timeslot 2", "area 1", "timeslot 2 (area 1)", 100),
    new Reservation(3, "timeslot 3", "area 1", "timeslot 3 (area 1)", 100),
    new Reservation(4, "timeslot 1", "area 2", "timeslot 1 (area 2)", 100),
    new Reservation(5, "timeslot 2", "area 2", "timeslot 2 (area 2)", 100),
    new Reservation(6, "timeslot 3", "area 2", "timeslot 3 (area 2)", 100),
    new Reservation(7, "timeslot 1", "area 3", "timeslot 1 (area 3)", 100),
    new Reservation(8, "timeslot 2", "area 3", "timeslot 2 (area 3)", 100),
    new Reservation(9, "timeslot 3", "area 3", "timeslot 3 (area 3)", 100),
    new Reservation(10, "timeslot 1", "area 4", "timeslot 1 (area 4)", 100),
    new Reservation(11, "timeslot 2", "area 4", "timeslot 2 (area 4)", 100),
    new Reservation(12, "timeslot 3", "area 4", "timeslot 3 (area 4)", 100)
  ];

  getReservations(): Observable<Reservation[]> {
    return from([this.reservations]);
  }
}
