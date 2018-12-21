import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from './../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent {
    @Input()
    detail: Passenger;

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter();

    editing: boolean = false;

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    toggleEdit() {
        if(this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }
}