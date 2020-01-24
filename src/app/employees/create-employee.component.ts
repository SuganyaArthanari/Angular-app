import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Department} from '../models/department.model'
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;

  employee: Employee = 
    {id: 1,
    name : null,
    gender : null,
    email : null,
    phonenumber : null,
    contactPreference : null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath : null
  };
  departments : Department[] = [
    {id :1,name : 'HR'},
    {id :2,name : 'IT'},
    {id :3,name : 'FIN'},
    {id :4,name : 'PUR'},
  ];
  constructor( private _employeeService :EmployeeService,
                private _router : Router) { }
  togglePhotoPrevie(){
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
  }
  saveEmp() : void {
    this._employeeService.saveEmployee(this.employee);
    this._router.navigate(['list']);
  }

}
