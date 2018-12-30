import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from './../../models/passenger.interface';
import { Baggage } from './../../models/baggage.interface';

@Component({
    selector   : 'passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls  : [ 'passenger-form.component.scss']
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter();

    baggage: Baggage[] = [
        {
            key  : 'none',
            value: 'No baggage'
        },
        {
            key  : 'hand-only',
            value: 'Hand baggage'
        },
        {
            key  : 'hold-only',
            value: 'Hold baggage'
        },
        {
            key  : 'hand-hold',
            value: 'Hand and Hold baggage'
        }
    ]

    toggleCheckIn(isCheckedIn: boolean) {
        if(isCheckedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

    handleSubmit(psgr: Passenger, isValid: boolean){
        if (isValid) {
            console.table(psgr);
            this.update.emit(psgr);
        }
    }
}