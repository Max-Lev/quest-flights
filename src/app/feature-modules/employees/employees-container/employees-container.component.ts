import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFlightsContainer } from '../../flights-dashboard/models/employee-flights-container.model';

@Component({
  selector: 'app-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.scss']
})
export class EmployeesContainerComponent implements OnInit, OnChanges {

  @Input() employeeFlightsModel?: EmployeeFlightsContainer;// = new Object() as EmployeeFlightsContainer;
  
  constructor() {

  };

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('employeeFlightsModel:', this.employeeFlightsModel);
    // console.log(changes);
  }

  ngOnInit(): void {
  }

}
