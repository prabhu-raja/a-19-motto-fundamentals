import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../services/passenger-dashboard.service";
import { Passenger } from './../../models/passenger.interface';
import { ActivatedRoute, Params, Router } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
    selector   : 'passenger-viewer',
    templateUrl: './passenger-viewer.component.html',
    styleUrls  : ['passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;

    constructor(
        private passengerDbService: PassengerDashboardService, 
        private actRoute: ActivatedRoute, 
        private router: Router) { }

    ngOnInit() {
        /* 
        * without switchMap
        this.actRoute
            .params
            .subscribe((data: Params) => {
                this.passengerDbService
                    .getPassenger(data.rPassengerId)
                    .subscribe((data: Passenger) => this.passenger = data);
            });
        */
        // * with switchMap
        this.actRoute
            .params
            .switchMap((data: any) => this.passengerDbService.getPassenger(data.rPassengerId))
            .subscribe((data: Passenger) => this.passenger = data);

    }

    onUpdatePassenger(evt: Passenger) {
        this.passengerDbService
            .updatePassenger(evt)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, data);
            })
    }

    goBack() {
        this.router.navigate(['/passengers']);
    }
}