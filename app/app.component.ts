import { Component } from "@angular/core";

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
  <div class="app">
    <!-- <passenger-dashboard></passenger-dashboard> -->
    <!-- <passenger-viewer></passenger-viewer> -->
    <!--<nav class="nav">
      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact: true}">
          Home
      </a>
      <a
        routerLink="/oops"
        routerLinkActive="active">
          404
      </a>
    </nav>-->
    <nav class="nav">
      <a
        *ngFor="let item of listNav"
        [routerLink]="item.link"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: item.exact }">
          {{item.name}}
      </a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  listNav: Nav[] = [
    {
      link: "/",
      name: "Home",
      exact: true
    },
    {
      link: "/passengers",
      name: "Passengers",
      exact: true
    },
    {
      link: "/oops",
      name: "404",
      exact: false
    }
  ];
}
