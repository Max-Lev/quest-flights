import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsInfoContainerComponent } from './flights-info-container/flights-info-container.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    FlightsInfoContainerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    FlightsInfoContainerComponent,
    MatTableModule
  ]
})
export class FlightsInfoModule { }
