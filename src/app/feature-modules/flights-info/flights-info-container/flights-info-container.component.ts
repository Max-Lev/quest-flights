import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFlightsContainer, FlightViewModel } from '../../flights-dashboard/models/employee-flights-container.model';
import { UserSelectedInfoAction } from '../../flights-dashboard/models/user-selected-info.action';
import { MatTable, MatTableModule } from '@angular/material/table';
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

  @Output() userSelectedInfo: EventEmitter<UserSelectedInfoAction> = new EventEmitter();

  selectedRowIndex: FlightViewModel;

  @ViewChild('table') table: MatTable<TableViewModel>;

  constructor() {

  };

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.table)
    }, 1000);
  }

  flightSelected(flight: FlightViewModel, rIndex: number) {

    this.employeeFlightsModel.allFlights.map(item => item.isSelected = false);

    flight.isSelected = true;

    this.userSelectedInfo.emit({ cntrl: '[Flights]', payload: flight });

  }


}
