import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeFlightsContainer } from '../models/employee-flights-container.model';
import { GetFlightsService } from '../services/get-flights.service';


@Injectable()
export class FlightsResolver implements Resolve<Observable<EmployeeFlightsContainer>> {

  constructor(private getFlightsService: GetFlightsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getFlightsService.getDashboardFlights();
  }
}
