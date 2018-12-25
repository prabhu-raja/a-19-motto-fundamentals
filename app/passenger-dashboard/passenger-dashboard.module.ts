import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

//* Containers 📦
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

//* Components 🎠
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

//* Services ⚙️
import { PassengerDashboardService } from "./services/passenger-dashboard.service";

@NgModule({
    declarations: [
        //* Containers 📦
        PassengerDashboardComponent,
        PassengerViewerComponent,

        //* Components 🎠
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {

}