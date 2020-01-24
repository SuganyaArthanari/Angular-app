import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-displaycomponent',
  templateUrl: './displaycomponent.component.html',
  styleUrls: ['./displaycomponent.component.css']
})
export class DisplaycomponentComponent implements OnInit {
@Input() employee:Employee;
  constructor() { }

  ngOnInit() {
  }

}
