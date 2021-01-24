import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesContainerComponent } from './employees-container/employees-container.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [EmployeesContainerComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    EmployeesContainerComponent,
    MatListModule
  ]
})
export class EmployeesModule { }
