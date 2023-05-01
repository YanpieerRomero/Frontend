import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  listEmployees: Employee[];

  constructor() {
    this.listEmployees = [
      {
        fullName: 'Lucas Martinez',
        email: 'lmartinez@gmail.com',
        phone: 3863936,
        sex: 'Male',
        dateOfEntry: new Date(),
        maritalStatus: 'Single',
      },
      {
        fullName: 'Juana Jamarillo',
        email: 'jjaramillo@gmail.com',
        phone: 3863935,
        sex: 'Female',
        dateOfEntry: new Date(),
        maritalStatus: 'Married',
      },
      {
        fullName: 'Pedro Pascal',
        email: 'ppascal@gmail.com',
        phone: 3936386,
        sex: 'Male',
        dateOfEntry: new Date(),
        maritalStatus: 'Divorced',
      },
      {
        fullName: 'Martin Ibarra',
        email: 'mibarra@gmail.com',
        phone: 3863963,
        sex: 'Male',
        dateOfEntry: new Date(),
        maritalStatus: 'Divorced',
      },
      {
        fullName: 'Rosa Salazar',
        email: 'lmartinez@gmail.com',
        phone: 3936386,
        sex: 'Female',
        dateOfEntry: new Date(),
        maritalStatus: 'Married',
      },
      {
        fullName: 'Christopher Ramirez',
        email: 'cramirez@gmail.com',
        phone: 3761256,
        sex: 'Male',
        dateOfEntry: new Date(),
        maritalStatus: 'Single',
      },
      {
        fullName: 'Ester Paredes',
        email: 'eparedes@gmail.com',
        phone: 3769812,
        sex: 'Female',
        dateOfEntry: new Date(),
        maritalStatus: 'Single',
      },
    ];
  }

  getEmployees(): Employee[] {
    return this.listEmployees.slice();
  }

  deleteEmployee(index: number) {
    this.listEmployees.splice(index, 1);
  }

  addEmployee(employee: Employee) {
    this.listEmployees.unshift(employee);
  }

  getEmployee(index: number) {
    return this.listEmployees[index];
  }

  updateEmployee(employee: Employee, employeeId: number) {
    this.listEmployees[employeeId].fullName = employee.fullName;
    this.listEmployees[employeeId].email = employee.email;
    this.listEmployees[employeeId].dateOfEntry = employee.dateOfEntry;
    this.listEmployees[employeeId].phone = employee.phone;
    this.listEmployees[employeeId].maritalStatus = employee.maritalStatus;
    this.listEmployees[employeeId].sex = employee.sex;
  }

}
