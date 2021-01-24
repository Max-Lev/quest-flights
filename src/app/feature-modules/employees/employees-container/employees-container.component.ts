import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CntrlActionEnum } from '../../flights-dashboard/models/cntrl-action.enum';
import { EmployeeFlightsContainer } from '../../flights-dashboard/models/employee-flights-container.model';
import { EmployeeResponseModel } from '../../flights-dashboard/models/employees-flights-response.model';
import { IUserSelectedInfoAction } from '../../flights-dashboard/models/user-selected-info.action';

@Component({
  selector: 'app-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.scss']
})
export class EmployeesContainerComponent implements OnInit, OnChanges {

  @Input() employeeFlightsModel?: EmployeeFlightsContainer;

  @Input() titleVisibility: 'visibile';

  @Input() userSelectedInfoAction: IUserSelectedInfoAction;

  @Output() userSelectedInfo: EventEmitter<IUserSelectedInfoAction> = new EventEmitter();

  @Input() cntrl: CntrlActionEnum;

  constructor() {

  }


  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

  selected(employee: EmployeeResponseModel) {
    this.userSelectedInfo.emit({ cntrl: CntrlActionEnum.Employee, payload: employee });
  }

}
