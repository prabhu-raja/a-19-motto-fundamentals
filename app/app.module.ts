import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

import { AppComponent } from "./app.component";
import { AppHomeComponent } from "./app-home.component";

const routes:Routes = [
  {
    path: '',
    component: AppHomeComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent
  ],
  imports: [
    //* Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),

    //* Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}