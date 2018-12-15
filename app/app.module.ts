import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';


const myRootRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(myRootRoutes),
    PassengerDashboardModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
