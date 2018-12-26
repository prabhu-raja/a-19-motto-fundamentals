import { Passenger } from './../../models/passenger.interface';
import { Component, Input } from "@angular/core";

@Component({
    selector   : 'passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls  : [ 'passenger-form.component.scss']
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    toggleCheckIn(isCheckedIn: boolean) {
        if(isCheckedIn) {
            this.detail.checkInDate = Date.now();
        }
    }
}