import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Passenger } from "./../../models/passenger.interface";
import { PassengerDashboardService } from "./../../passenger-dashboard.service";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
  <div>
    <passenger-count
      [items]="passengers">
    </passenger-count>
    <div *ngFor="let obj of passengers;">
      {{obj.fullname}}
    </div>
    <passenger-detail
      *ngFor="let psgr of passengers;"
      [detail]="psgr"
      (view)="handleView($event)"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)">
    </passenger-detail>
  </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router) {}

  ngOnInit() {
    //this.passengers = this.passengerService.getPassengers();
    this.passengerService
        .getPassengers()
        .subscribe((data: Passenger[]) => this.passengers = data);
  }

  handleView(evtView: Passenger) {
    this.router.navigate(['/passengers', evtView.id]);
  }

  handleEdit(evtEdit: Passenger) {
    this.passengerService
        .updatePassenger(evtEdit)
        .subscribe((data: Passenger) => {
          this.passengers = this.passengers.map((psgr: Passenger) => {
          if (psgr.id === evtEdit.id) {
            psgr = Object.assign({}, psgr, evtEdit);
          }
          return psgr;
          });
        });
  }

  handleRemove(evtRemove: Passenger) {
    this.passengerService
        .removePassenger(evtRemove)
        .subscribe((data:Passenger) => {
          this.passengers = this.passengers.filter((psgr: Passenger) => {
            return psgr.id !== evtRemove.id;
          });
        })

  }
}
