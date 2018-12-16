import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls:['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  name: string = 'Jack';

   constructor() {
     this.title = 'My Title🐝';
   }

   /*
   handleBlur(evnt: any) {
     console.log('object :', evnt);
     this.name = evnt.target.value;
   }
   */

   /*
   handleInput(evnt: any) {
     this.name = evnt.target.value;
   }
   */

   handleClick() {
     this.name = 'Jill';
   }

   /*
   handleChange(val: string) {
     this.name = val;
   }
   */
}