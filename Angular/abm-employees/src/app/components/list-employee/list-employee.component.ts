import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { MatDialog } from '@angular/material/dialog';
import { MessageConfirmComponent } from '../shared/message-confirm/message-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'fullName',
    'email',
    'maritalStatus',
    'dateOfEntry',
    'sex',
    'phone',
    'actions',
  ];
  dataSource = new MatTableDataSource<Employee>();
  listEmployees: Employee[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _employeeService: EmployeeService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.listEmployees = [];
  }

  ngAfterViewInit(): void {
    this.loadEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEmployees() {
    this.listEmployees = this._employeeService.getEmployees();
    this.dataSource = new MatTableDataSource(this.listEmployees);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteEmployee(index: number) {
    const dialogRef = this.dialog.open(MessageConfirmComponent, {
      width: '450px',
      data: { message: 'Are you sure you want to remove this employee?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        this._employeeService.deleteEmployee(index);
        this.loadEmployees();
        this._snackBar.open('Employee was successfully removed!', '', {
          duration: 3000
        });
      }
    });
  }
}
