import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFlightsContainer } from '../../flights-dashboard/models/employee-flights-container.model';
import { IUserSelectedInfoAction } from '../../flights-dashboard/models/user-selected-info.action';
import { MatTable, MatTableModule } from '@angular/material/table';
import { FlightViewModel } from '../../flights-dashboard/models/employees-flights-response.model';
import { CntrlActionEnum } from '../../flights-dashboard/models/cntrl-action.enum';
export interface TableViewModel {
  origin: string;
  originDate: string;
  destination: string;
  destinationDate: string;
};
@Component({
  selector: 'app-flights-info-container',
  templateUrl: './flights-info-container.component.html',
  styleUrls: ['./flights-info-container.component.scss']
})
export class FlightsInfoContainerComponent implements OnInit, OnChanges, AfterViewInit {

  displayedColumns = ['Flight Number', 'Origin', 'Origin Date', 'Destination', 'Destination Date'];

  @Input() employeeFlightsModel?: EmployeeFlightsContainer;

  selectedData = [];

  @Output() userSelectedInfo: EventEmitter<IUserSelectedInfoAction> = new EventEmitter();

  selectedRowIndex: FlightViewModel;

  @ViewChild('table') table: MatTable<TableViewModel>;

  constructor() {

  };

  ngOnInit(): void {

  };

  ngOnChanges(changes: SimpleChanges): void {

  };

  ngAfterViewInit(): void {

  };

  flightSelected(flight: FlightViewModel, rIndex: number) {

    this.employeeFlightsModel.allFlights.map(item => item.isSelected = false);

    flight.isSelected = true;

    this.userSelectedInfo.emit({ cntrl: CntrlActionEnum.Flights, payload: flight });

  };


}
