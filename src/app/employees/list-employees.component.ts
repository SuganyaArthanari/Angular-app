import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { markDirty } from '@angular/core/src/render3';
import { createChangeDetectorRef } from '@angular/core/src/view/refs';
import {EmployeeService} from './employee.service'

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[] ;
searchby:string;
  constructor( private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}
