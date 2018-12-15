import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

//components
import { PassengerCountcomponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

//services
import { PassengerDashboardService } from './passenger-dashboard.service';

const myChildRoutes:Routes=[
  {
    path: 'passengers',
    children:[
      { path: '', component: PassengerDashboardComponent },
      { path: ':id', component: PassengerViewerComponent }
    ]
  }
];

@NgModule({
  declarations:[
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // components
    PassengerCountcomponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports:[
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(myChildRoutes)
  ],
  // exports:[
  //   // `PassengerDashboardComponent,
  //   PassengerViewerComponent
  // ],
  providers:[
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {

}
