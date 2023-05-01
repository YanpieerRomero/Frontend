import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class AddEditEmployeeComponent implements OnInit {
  listMaritalStatus: any[];
  myForm: FormGroup;
  employeeId: any;
  action: string;

  constructor(
    private fb: FormBuilder,
    private _employeeService: EmployeeService,
    private route: Router,
    private _snackBar: MatSnackBar,
    private aRoute: ActivatedRoute
  ) {
    this.listMaritalStatus = ['Single', 'Married', 'Divorced'];
    this.myForm = this.fb.group({
      fullName: [null, [Validators.required, Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      dateOfEntry: [null, Validators.required],
      phone: [null, Validators.required],
      maritalStatus: [null, Validators.required],
      sex: [null, Validators.required],
    });
    this.employeeId = this.aRoute.snapshot.params['id'];
    this.action = 'Add';
  }

  ngOnInit(): void {
    if (this.employeeId !== undefined) {
      this.action = 'Edit';
      this.getUpdateEmployeeData();
    }
  }

  getUpdateEmployeeData() {
    const employee: Employee = this._employeeService.getEmployee(
      this.employeeId
    );
    this.myForm.patchValue({
      fullName: employee.fullName,
      email: employee.email,
      dateOfEntry: employee.dateOfEntry,
      phone: employee.phone,
      maritalStatus: employee.maritalStatus,
      sex: employee.sex,
    });
  }

  saveEmployee() {
    const employee: Employee = {
      fullName: this.myForm.get('fullName')?.value,
      email: this.myForm.get('email')?.value,
      dateOfEntry: this.myForm.get('dateOfEntry')?.value,
      phone: this.myForm.get('phone')?.value,
      maritalStatus: this.myForm.get('maritalStatus')?.value,
      sex: this.myForm.get('sex')?.value,
    };

    if (this.employeeId !== undefined) {
      this.updateEmployee(employee);
      return;
    }
    this.addEmployee(employee);
  }

  addEmployee(employee: Employee) {
    this._employeeService.addEmployee(employee);
    this._snackBar.open('Employee was successfully registered!', '', {
      duration: 3000,
    });
    this.route.navigate(['/']);
  }

  updateEmployee(employee: Employee) {
    this._employeeService.updateEmployee(employee, this.employeeId);
    this._snackBar.open('Employee was successfully updated!', '', {
      duration: 3000,
    });
    this.route.navigate(['/']);
  }

  validateEmptyField(value: string): boolean {
    return (
      this.myForm.get(value)!.hasError('required') &&
      this.myForm.get(value)!.touched
    );
  }

  validateMaxLengthField(value: string): boolean {
    return (
      this.myForm.get(value)!.hasError('maxlength') &&
      this.myForm.get(value)!.touched
    );
  }

  validateEmail(value: string): boolean {
    return (
      this.myForm.get(value)!.hasError('email') &&
      this.myForm.get(value)!.touched
    );
  }
}
