import { Component } from "@angular/core";

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  isVip: boolean
}
@Component({
  selector: 'app-root',
  styleUrls:['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {

  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    isVip: false
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    isVip: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    isVip: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    isVip: false
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    isVip: true
  }];
}