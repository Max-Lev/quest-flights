import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFlightsContainer } from '../../flights-dashboard/models/employee-flights-container.model';

export interface TableViewModel {
  origin: string;
  originDate: string;
  destination: string;
  destinationDate: string;
}

// const ELEMENT_DATA: TableViewModel[] = [
//   { origin: '1', originDate: '12/12/2021', destination: '1.0079', destinationDate: 'H' },
// ];

@Component({
  selector: 'app-flights-info-container',
  templateUrl: './flights-info-container.component.html',
  styleUrls: ['./flights-info-container.component.scss']
})
export class FlightsInfoContainerComponent implements OnInit, OnChanges {

  displayedColumns = ['Flight Number', 'Origin', 'Origin Date', 'Destination', 'Destination Date'];

  @Input() employeeFlightsModel?: EmployeeFlightsContainer;

  constructor() {

  };

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {


  }

}
