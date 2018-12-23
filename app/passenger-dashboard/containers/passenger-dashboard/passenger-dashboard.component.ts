import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from './../../services/passenger-dashboard.service';
@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(private passengerDashboardService: PassengerDashboardService) { }
    
    ngOnInit() {
        this.passengers = this.passengerDashboardService.getPassengers();
    }

    handleRemove(evt: Passenger) {
        console.log('evt💥:', evt);
        this.passengers = this.passengers.filter(psgr => psgr.id != evt.id);
        console.log('Removed :', this.passengers);
    }

    handleEdit(evt: Passenger) {
        console.log('evt✂️:', evt);
        console.log('Passengers🎠:', this.passengers);

        this.passengers = this.passengers.map(psgr => {
            if(psgr.id === evt.id){
                psgr = Object.assign({}, psgr, evt);
            }
            return psgr;
        })
        console.log('Passengers👛:', this.passengers);
    }
    
}