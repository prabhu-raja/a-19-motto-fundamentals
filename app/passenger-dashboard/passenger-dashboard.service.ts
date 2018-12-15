import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Passenger } from "./models/passenger.interface";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

const PASSENGER_API: string = "/api/passengers";
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    console.log(this.http);
  }

  getPassenger(pid: number): Observable<Passenger>{
    return this.http
      .get(`${PASSENGER_API}/${pid}`)
      .map((resp: Response) => resp.json())
      .catch((err: any) => Observable.throw(err.json()));
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((resp: Response) => resp.json())
      .catch((err: any) => Observable.throw(err.json()));
  }

  updatePassenger(psgr: Passenger) : Observable<Passenger> {
    let hdrs = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: hdrs
    });
    return this.http
      .put(`${PASSENGER_API}/${psgr.id}`,psgr, options)
      .map((resp:Response) => resp.json())
      .catch((err: any) => Observable.throw(err.json()));
  }

  removePassenger(psgr: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${psgr.id}`)
      .map((resp:Response) => resp.json())
      .catch((err: any) => Observable.throw(err.json()));
  }
}
