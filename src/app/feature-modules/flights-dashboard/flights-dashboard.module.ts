import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsDashboardContainerComponent } from './flights-dashboard-container/flights-dashboard-container.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesModule } from '../employees/employees.module';
import { FlightsInfoModule } from '../flights-info/flights-info.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetFlightsService } from './services/get-flights.service';
import { FlightsResolver } from './resolvers/flights.service';

const routes: Routes = [
  {
    path: '', component: FlightsDashboardContainerComponent,
    resolve: {
      flightsResolver: FlightsResolver
    }
  }
];

@NgModule({
  declarations: [
    FlightsDashboardContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EmployeesModule,
    FlightsInfoModule,
    HttpClientModule
  ],
  providers: [
    GetFlightsService,
    FlightsResolver
  ]
})
export class FlightsDashboardModule {
  constructor() {

  }
}
