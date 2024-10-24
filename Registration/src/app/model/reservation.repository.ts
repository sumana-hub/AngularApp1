import { Injectable } from "@angular/core";
import { Reservation } from "./reservation.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ReservationRepository {
  private reservation: Reservation[] = [];
  private area: string[] = [];
  constructor(private dataSource: StaticDataSource) {
    dataSource.getReservations().subscribe(data => {
      this.reservation = data;
      this.area = data.map(p => p.area ?? "(None)")
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }
  getReservations(area?: string): Reservation[] {
    return this.reservation
      .filter(p => area == undefined || area == p.area);
  }
  getReservation(id: number): Reservation | undefined {
    return this.reservation.find(p => p.id == id);
  }
  getArea(): string[] {
    return this.area;
  }
}