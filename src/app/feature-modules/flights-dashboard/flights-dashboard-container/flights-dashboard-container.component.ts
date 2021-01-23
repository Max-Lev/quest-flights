import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFlightsContainer } from '../models/employee-flights-container.model';
import { GetFlightsService } from '../services/get-flights.service';

@Component({
  selector: 'app-flights-dashboard-container',
  templateUrl: './flights-dashboard-container.component.html',
  styleUrls: ['./flights-dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightsDashboardContainerComponent implements OnInit, AfterViewInit {

  employeeFlightsModel: EmployeeFlightsContainer = new Object() as EmployeeFlightsContainer;

  constructor(private changeDetector: ChangeDetectorRef,
    private getFlightsService: GetFlightsService) {

  }

  ngOnInit(): void {

  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getViewModel$();
    }, 1000);
  };

  getViewModel$() {

    this.getFlightsService.getDashboardFlights().subscribe((data: EmployeeFlightsContainer) => {

      this.employeeFlightsModel = Object.assign(this.employeeFlightsModel, { ...data });

      this.changeDetector.detectChanges();

    });

  };

}
