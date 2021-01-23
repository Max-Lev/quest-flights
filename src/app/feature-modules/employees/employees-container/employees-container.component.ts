import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFlightsContainer } from '../../flights-dashboard/models/employee-flights-container.model';

@Component({
  selector: 'app-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.scss']
})
export class EmployeesContainerComponent implements OnInit, OnChanges {

  @Input() employeeFlightsModel?: EmployeeFlightsContainer;

  @Input() titleVisibility: 'visibile';
  

  constructor() {

  };

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

}
