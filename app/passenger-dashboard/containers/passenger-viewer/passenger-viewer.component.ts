import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../services/passenger-dashboard.service";
import { Passenger } from './../../models/passenger.interface';

@Component({
    selector   : 'passenger-viewer',
    templateUrl: './passenger-viewer.component.html',
    styleUrls  : ['passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;
    constructor(private passengerDbService: PassengerDashboardService) { }

    ngOnInit() {
        this.passengerDbService
            .getPassenger(1)
            .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(evt: Passenger) {
        this.passengerDbService
            .updatePassenger(evt)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, data);
            })
    }
}