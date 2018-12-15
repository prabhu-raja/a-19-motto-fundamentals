import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import 'rxjs/add/operator/switchMap';

import { PassengerDashboardService } from "./../../passenger-dashboard.service";
import { Passenger } from "./../../models/passenger.interface";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
  <div>
    <button (click)="goBack()">
      &lsaquo; Go Back
    </button>
    <passenger-form
      [detail]="psgr"
      (update)="onUpdatePassenger($event)">
    </passenger-form>
  </div>
  `
})
export class PassengerViewerComponent implements OnInit {
  psgr: Passenger;

  constructor(
    private psgrService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {


    this.route.params
        .switchMap((data: Passenger) => this.psgrService.getPassenger(data.id))
        .subscribe((data: Passenger) => this.psgr = data);

    /*
    this.route.params
        .subscribe((data: Params) => {
          console.log(data);
        });
    //
    this.psgrService
        .getPassenger(1)
        .subscribe((data: Passenger) => (this.psgr = data));
    */
  }

  onUpdatePassenger(evtUpd: Passenger) {
    this.psgrService
      .updatePassenger(evtUpd)
      .subscribe((data: Passenger) => {
        this.psgr = Object.assign({}, this.psgr, evtUpd);
      });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
