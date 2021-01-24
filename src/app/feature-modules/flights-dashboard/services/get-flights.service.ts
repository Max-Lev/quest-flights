import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, interval, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { combineAll, flatMap, mergeMap, switchMap, timeInterval, toArray } from 'rxjs/internal/operators';
import { from } from 'rxjs/internal/observable/from';
import { EmployeeFlightsContainer } from '../models/employee-flights-container.model';
import { Subject } from 'rxjs/internal/Subject';
import { EmployeeResponseModel, IFlightResponseModel } from '../models/employees-flights-response.model';

@Injectable()
export class GetFlightsService {

  constructor(private httpClient: HttpClient) { };

  employeesList: EmployeeResponseModel[] = [];

  employeeFlightsContainer: EmployeeFlightsContainer = new EmployeeFlightsContainer([]);

  private employeesCache: EmployeeResponseModel[] = [];

  getDashboardFlights(): Observable<EmployeeFlightsContainer> {

    const getFlightsDashboard$ = new Subject<EmployeeFlightsContainer>();

    const getEmployeeFlights$ = (employee$) => this.getEmployeeFlights(employee$);

    this.getEmployees().pipe(

      mergeMap(employees$ => from(employees$)),

      mergeMap((employee$: EmployeeResponseModel) =>

        forkJoin(
          [
            of(employee$),
            getEmployeeFlights$(employee$)
          ]
        ))
      // .pipe((employee_flights_join: Observable<[IEmployeeResponseModel, IFlightResponseModel[]]>) => employee_flights_join))

    ).pipe(toArray()).subscribe((employee_flights_join_response$: [EmployeeResponseModel, IFlightResponseModel[]][]) => {

      this.employeeFlightsContainer = new EmployeeFlightsContainer(employee_flights_join_response$);

      this.setEmployeesListCache(employee_flights_join_response$);

      getFlightsDashboard$.next(this.employeeFlightsContainer);

      getFlightsDashboard$.complete();

    });

    return getFlightsDashboard$;

  };

  private setEmployeesListCache(employee_flights_join_response$: [EmployeeResponseModel, IFlightResponseModel[]][]) {

    employee_flights_join_response$.map(item => {

      if (this.employeesCache.length !== employee_flights_join_response$.length) {

        this.employeesCache.push({ id: item[0].id, name: item[0].name });

        this.employeeFlightsContainer.allEmloyees = [...this.employeesCache];

      }
      else {
        this.employeeFlightsContainer.allEmloyees = [...this.employeesCache];
      }
    })

  }

  private getEmployees(): Observable<EmployeeResponseModel[]> {

    if (this.employeeFlightsContainer.allEmloyees.length) {
      return of(this.employeeFlightsContainer.allEmloyees);
    } else {
      return this.httpClient.get<EmployeeResponseModel[]>(environment.workers);
    }

  };

  private getEmployeeFlights(employeesResponse: EmployeeResponseModel): Observable<IFlightResponseModel[]> {

    return this.httpClient.get(`${environment.workers}${employeesResponse.id}`) as Observable<IFlightResponseModel[]>;

  }




}
