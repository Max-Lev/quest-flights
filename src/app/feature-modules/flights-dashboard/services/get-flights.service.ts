import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, interval, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { combineAll, flatMap, mergeMap, switchMap, timeInterval, toArray } from 'rxjs/internal/operators';
import { from } from 'rxjs/internal/observable/from';
import { EmployeeFlightsContainer, IEmployeeResponseModel, IFlightResponseModel } from '../models/employee-flights-container.model';
import { Subject } from 'rxjs/internal/Subject';
import { timer } from 'rxjs/internal/observable/timer';
import { pipe } from 'rxjs/internal/util/pipe';

@Injectable()
export class GetFlightsService {

  constructor(private httpClient: HttpClient) { };

  getDashboardFlights(): Observable<EmployeeFlightsContainer> {

    const getFlightsDashboard$ = new Subject<EmployeeFlightsContainer>();

    const getEmployeeFlights$ = (employee$) => this.getEmployeeFlights(employee$);

    this.getEmployees().pipe(

      mergeMap(employees$ => from(employees$)),

      mergeMap((employee$: IEmployeeResponseModel) =>

        forkJoin(
          [
            of(employee$),
            getEmployeeFlights$(employee$)
            // interval(1 * 60 * 1000).pipe(timeInterval()).pipe(() => getEmployeeFlights$(employee$))
          ]
        ).pipe(
          (employee_flights_join: Observable<[IEmployeeResponseModel, IFlightResponseModel[]]>) => employee_flights_join))

    ).pipe(

      toArray()

    ).subscribe((employee_flights_join_response$) => {

      const employeeFlightsContainer = new EmployeeFlightsContainer(employee_flights_join_response$);

      getFlightsDashboard$.next(employeeFlightsContainer);

      console.log(employeeFlightsContainer)

      return employeeFlightsContainer;

    });

    return getFlightsDashboard$;

  }

  getEmployees(): Observable<IEmployeeResponseModel[]> {

    return this.httpClient.get<IEmployeeResponseModel[]>(environment.workers);

  };

  getEmployeeFlights(employeesResponse: IEmployeeResponseModel): Observable<IFlightResponseModel[]> {
    // const time = timer(0, 1 * 60 * 1000);
    // time.subscribe(t => {
    return this.httpClient.get(`${environment.workers}${employeesResponse.id}`) as Observable<IFlightResponseModel[]>;

  }




}
