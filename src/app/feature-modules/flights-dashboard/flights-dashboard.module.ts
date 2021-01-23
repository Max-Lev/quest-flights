import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsDashboardContainerComponent } from './flights-dashboard-container/flights-dashboard-container.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesModule } from '../employees/employees.module';
import { FlightsInfoModule } from '../flights-info/flights-info.module';
import { FlightInformationComponent } from './components/flight-information/flight-information.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetFlightsService } from './services/get-flights.service';

const routes: Routes = [
  {
    path: '', component: FlightsDashboardContainerComponent
  }
];

@NgModule({
  declarations: [
    FlightsDashboardContainerComponent,
    FlightInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EmployeesModule,
    FlightsInfoModule,
    HttpClientModule
  ],
  providers: [
    GetFlightsService
  ]
})
export class FlightsDashboardModule {
  constructor() {
    console.log(environment)
  }
}
