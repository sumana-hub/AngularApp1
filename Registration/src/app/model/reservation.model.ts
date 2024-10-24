export class Reservation {
  constructor(
  public id?: number,
  public timeslot?: string,
  public area?: string,
  public description?: string,
  public price?: number) { }
 }