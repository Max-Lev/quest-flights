import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs/internal/observable/timer';
import { EmployeeFlightsContainer } from '../models/employee-flights-container.model';
import { UserSelectedInfoAction } from '../models/user-selected-info.action';
import { GetFlightsService } from '../services/get-flights.service';

@Component({
  selector: 'app-flights-dashboard-container',
  templateUrl: './flights-dashboard-container.component.html',
  styleUrls: ['./flights-dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightsDashboardContainerComponent implements OnInit, AfterViewInit {

  employeeFlightsModel: EmployeeFlightsContainer = new EmployeeFlightsContainer([]);

  constructor(private changeDetector: ChangeDetectorRef, private activatedRoute: ActivatedRoute, private getFlightsService: GetFlightsService) {

  };

  ngOnInit(): void {
    this.employeeFlightsModel = { ...this.activatedRoute.snapshot.data.flightsResolver } as EmployeeFlightsContainer;
    console.log(this.employeeFlightsModel);
    this.changeDetector.detectChanges();
  };

  userSelectedActionHandler(preference: UserSelectedInfoAction) {
    debugger;
  };

  ngAfterViewInit(): void {

    // this.pullFlights();

  };

  pullFlights() {

    const time = timer(0, 1 * 60 * 100);

    time.subscribe((tm: number) => {
      this.getViewModel$();
    });

  };

  getViewModel$() {


    this.getFlightsService.getDashboardFlights().subscribe((data: EmployeeFlightsContainer) => {

      this.employeeFlightsModel = { ...data } as EmployeeFlightsContainer;

      this.changeDetector.detectChanges();

    });

  };

}
