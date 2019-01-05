import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

//* Containers 📦
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

//* Components 🎠
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

//* Services ⚙️
import { PassengerDashboardService } from "./services/passenger-dashboard.service";

const routes:Routes = [
    {
        path: 'passengers',
        component: PassengerDashboardComponent
    }
]

@NgModule({
    declarations: [
        //* Containers 📦
        PassengerDashboardComponent,
        PassengerViewerComponent,

        //* Components 🎠
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    // exports: [
    //     PassengerViewerComponent
    // ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {

}