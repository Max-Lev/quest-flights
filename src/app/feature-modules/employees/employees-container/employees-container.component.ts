import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFlightsContainer, IEmployeeResponseModel } from '../../flights-dashboard/models/employee-flights-container.model';
import { UserSelectedInfoAction } from '../../flights-dashboard/models/user-selected-info.action';

@Component({
  selector: 'app-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.scss']
})
export class EmployeesContainerComponent implements OnInit, OnChanges {

  @Input() employeeFlightsModel?: EmployeeFlightsContainer;

  @Input() titleVisibility: 'visibile';

  @Input() selectedData;

  @Output() userSelectedInfo: EventEmitter<UserSelectedInfoAction> = new EventEmitter();

  constructor() {

  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedData);
  }

  ngOnInit(): void {
  }

  employeeSelected(employee: IEmployeeResponseModel) {
    this.userSelectedInfo.emit({ cntrl: '[Employee]', payload: employee });
  }

}
