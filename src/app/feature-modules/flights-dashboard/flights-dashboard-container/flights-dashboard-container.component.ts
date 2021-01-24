import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs/internal/observable/timer';
import { CntrlActionEnum } from '../models/cntrl-action.enum';
import { EmployeeFlightsContainer, EmployeeFlightsJoinListModel } from '../models/employee-flights-container.model';
import { EmployeeResponseModel, FlightViewModel } from '../models/employees-flights-response.model';
import { IUserSelectedInfoAction } from '../models/user-selected-info.action';
import { GetFlightsService } from '../services/get-flights.service';

@Component({
  selector: 'app-flights-dashboard-container',
  templateUrl: './flights-dashboard-container.component.html',
  styleUrls: ['./flights-dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightsDashboardContainerComponent implements OnInit, AfterViewInit {

  employeeFlightsModel: EmployeeFlightsContainer = new EmployeeFlightsContainer([]);

  userSelectedInfoAction: IUserSelectedInfoAction;

  constructor(private changeDetector: ChangeDetectorRef, private activatedRoute: ActivatedRoute,
    private getFlightsService: GetFlightsService) {

  }

  ngOnInit(): void {
    this.getResolverData();
  }

  ngAfterViewInit(): void {
    this.pullFlights();
  }


  getResolverData() {

    this.employeeFlightsModel = { ...this.activatedRoute.snapshot.data.flightsResolver } as EmployeeFlightsContainer;

    this.setDefaultInfo();

    this.changeDetector.detectChanges();
  }

  setDefaultInfo() {

    this.userSelectedInfoAction = { cntrl: CntrlActionEnum.Flights, payload: this.employeeFlightsModel.allFlights[0] };

    this.changeDetector.detectChanges();
  }

  userSelectedActionHandler(userSelectedInfoActionEvent: IUserSelectedInfoAction) {

    if (userSelectedInfoActionEvent.cntrl === CntrlActionEnum.Employee) {

      const flights: EmployeeFlightsJoinListModel =
        // tslint:disable-next-line: no-string-literal
        this.employeeFlightsModel.employeeFlightsList.find((emp) => emp.employeeKey === userSelectedInfoActionEvent.payload['id']);

      this.userSelectedInfoAction = { cntrl: CntrlActionEnum.Employee, payload: flights.employeeFlights.flights as Array<FlightViewModel> };

    } else {

      this.userSelectedInfoAction = { cntrl: CntrlActionEnum.Flights, payload: userSelectedInfoActionEvent.payload };

    }


  }

  pullFlights() {

    const time = timer(0, 1 * 60 * 100);

    time.subscribe((tm: number) => {
      this.getViewModel$();
    });

  }

  getViewModel$() {

    this.getFlightsService.getDashboardFlights().subscribe((data: EmployeeFlightsContainer) => {

      this.employeeFlightsModel = { ...data } as EmployeeFlightsContainer;

      this.setDefaultInfo();

      this.changeDetector.detectChanges();

    });

  }

}
