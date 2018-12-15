import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "./../../models/passenger.interface";
import { Baggage } from "./../../models/baggage.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form (ngSubmit)="handleSubmit(psgform.value, psgform.valid)" #psgform="ngForm" novalidate>
      Form!
      {{detail | json}}
      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          required
          #fname="ngModel"
          [ngModel]="detail?.fullname">
          <div *ngIf="fname.errors?.required && fname.dirty" class="error">
            Passenger name is required
          </div>
      </div>
      <div>
        Passenger Id:
        <input
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id">
          <div *ngIf="id.errors?.required && id.dirty" class="error">
            Passenger id is required
          </div>
      </div>
      <div>
        <label>
          <input
            type="radio"
            [value]="true"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
          Yes
        </label>
        <label>
          <input
            type="radio"
            [value]="false"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
          No
        </label>
      </div>
      <div *ngIf="psgform.value.checkedIn">
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate">
      </div>
      <div>
        Luggage:
        <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{item.value}}
          </option>
        </select>
      </div>

      <button type="submit" [disabled]="psgform.invalid">
        Update Passenger
      </button>
    </form>
  `
})
export class PassengerFormComponent {
  @Input() detail: Passenger;
  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [
    {
      key: "none",
      value: "No baggage"
    },
    {
      key: "hand-only",
      value: "Hand baggage"
    },
    {
      key: "hold-only",
      value: "Hold baggage"
    },
    {
      key: "hand-hold",
      value: "Hand and Hold baggage"
    }
  ];

  constructor() {}

  toggleCheckIn(checkin: boolean) {
    if (checkin) {
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(psgrValue: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(psgrValue);
    }
  }
}
