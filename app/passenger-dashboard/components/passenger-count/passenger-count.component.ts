import { Component, Input } from "@angular/core";
import { Passenger } from "./../../models/passenger.interface";

@Component({
  selector: "passenger-count",
  template: `
  <div>
    <h3>Airline Passengers</h3>
    <div>
      Total Checked in : {{checkedInCount()}} / {{items?.length}}
    </div>
  </div>
  `
})
export class PassengerCountcomponent {
  @Input() items: Passenger[];

  checkedInCount(): number {
    if (!this.items) return;
    return this.items.filter((obj: Passenger) => {
      return obj.checkedIn;
    }).length;
  }
}
