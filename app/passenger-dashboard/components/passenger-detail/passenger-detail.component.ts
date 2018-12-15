import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit
} from "@angular/core";
import { Passenger } from "./../../models/passenger.interface";

@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `

    <br>
    <div>
      Passenger Detail:
    </div>

    <span
      class="status"
      [class.checked-in]="detail.checkedIn">
    </span>
    <div *ngIf="editing">
      <input
        type="text"
        [value]="detail.fullname"
        (input)="onNameChange(fname.value)"
        #fname>
    </div>
    <div *ngIf="!editing">
      Name: {{detail.fullname}}
    </div>
    <!--<p>{{detail | json}}</p>-->
    <div class="date">
      CheckIn date: {{detail.checkInDate ? (detail.checkInDate | date:'yMMMMd') : 'Not Checkedin'}}
    </div>
    <!--<div class="children">
      Children: {{detail.children?.length || 0}}
    </div>-->
    <button (click)="toggleEdit()">
      {{editing ? 'Done' : 'Edit'}}
    </button>
    <button (click)="onRemove()">
      Remove
    </button>
    <button (click)="goToPassenger()">
      View
    </button>
  `
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input() detail: Passenger;
  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  ngOnChanges(changes) {
    console.log(changes);
    if (changes.detail) {
      //this.detail = Object.assign({}, this.detail, changes.detail);
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
  ngOnInit() {}

  onNameChange(fullName: string) {
    this.detail.fullname = fullName;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }
}
