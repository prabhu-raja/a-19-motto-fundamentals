import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls:['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  name: string = 'Jack'
   constructor() {
     this.title = 'My Title🐝';
   }
}