import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit{
  @Input() appointmentsList: any;
  @Output() removeAppointment = new EventEmitter<number>();

  constructor() { /* TODO document why this constructor is empty */ }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty   
  }

  deleteAppointment(index: number): void {
    this.removeAppointment.emit(index);
  }
}
