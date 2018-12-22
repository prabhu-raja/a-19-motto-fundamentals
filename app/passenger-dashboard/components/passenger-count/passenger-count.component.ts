import { Component, Input } from "@angular/core";
import { Passenger } from './../../models/passenger.interface';

@Component({
    selector: 'passenger-count',
    templateUrl: './passenger-count.component.html'
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];
    /**
     * Return length from the Passangers List
     */
    checkedInCount(): number {
        if(!this.items) return;
        return this.items.filter((itm: Passenger) => itm.checkedIn).length;
    }
}