import {Injectable} from '@angular/core';
import { Employee } from '../models/employee.model';
@Injectable()
export class EmployeeService{
    private listEmployees: Employee[] = [
        {
            id: 1,
            name : 'Mark',
            gender : 'male',
            email : 'test@cc.co',
            phonenumber : 111111111,
            contactPreference : 'Email',
            dateOfBirth: new Date('10/25/1988'),
            department: 'IT',
            isActive: true,
            photoPath : 'assets/images/img1.jpeg'
        },
        {
            id: 1,
            name : 'Mary',
            gender : 'female',
            email : 'test11@cc.co',
            phonenumber : 111111111,
            contactPreference : 'Email',
            dateOfBirth: new Date('9/25/1985'),
            department: 'FIN',
            isActive: true,
            photoPath : 'assets/images/img2.jpeg'
        }
    ];

     getEmployee() : Employee[] {
         return this.listEmployees;
     }

     saveEmployee(employee : Employee){
         this.listEmployees.push(employee);
     }
}