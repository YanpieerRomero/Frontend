import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [
    { id: 1, name: 'Juan', lastname: 'Perez', sex: 'Male', salary: 25000 },
    { id: 2, name: 'Marcos', lastname: 'Gonzalez', sex: 'Male', salary: 65000 },
    { id: 3, name: 'Marta', lastname: 'Garcia', sex: 'Female', salary: 75000 },
    { id: 4, name: 'Ignacio', lastname: 'Cortes', sex: 'Male', salary: 55000 },
    { id: 5, name: 'Maria', lastname: 'Navarro', sex: 'Female', salary: 80000 },
    { id: 6, name: 'Joaquin', lastname: 'Marquez', sex: 'Male', salary: 80000 },
  ]
  radioButtonSelected = 'All';

  constructor() { /* TODO document why this constructor is empty */ }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  getEmployeesTotal(): number {
    return this.employees.length;
  }

  getEmployeesFemale(): number {
    return this.employees.filter(list => list.sex === 'Female').length;
  }

  getEmployeesMale(): number {
    return this.employees.filter(list => list.sex === 'Male').length;
  }

  employeeCountRadioChange(radioButtonSelectedChild: string): void {
    this.radioButtonSelected = radioButtonSelectedChild;
  }

}
