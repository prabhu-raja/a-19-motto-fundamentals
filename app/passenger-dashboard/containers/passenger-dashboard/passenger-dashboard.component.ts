import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor() {
        
    }
    
    ngOnInit() {
        this.passengers = [
            {
                id: 1,
                fullname: 'Stephen',
                checkedIn: true,
                checkInDate: 1490742000000,
                children: null
            }, 
            {
                id: 2,
                fullname: 'Rose',
                checkedIn: false,
                checkInDate: null,
                children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
            }, 
            {
                id: 3,
                fullname: 'James',
                checkedIn: true,
                checkInDate: 1491606000000,
                children: null
            }, 
            {
                id: 4,
                fullname: 'Louise',
                checkedIn: true,
                checkInDate: 1488412800000,
                children: [{ name: 'Jessica', age: 1 }]
            }, 
            {
                id: 5,
                fullname: 'Tina',
                checkedIn: false,
                checkInDate: null,
                children: null
            }
        ];
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