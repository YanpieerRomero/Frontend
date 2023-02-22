import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appointments-create',
  templateUrl: './appointments-create.component.html',
  styleUrls: ['./appointments-create.component.css']
})
export class AppointmentsCreateComponent implements OnInit {
  name: string;
  date: string;
  hour: string;
  symptoms: string;
  incorrectForm: boolean;

  @Output() newAppointment = new EventEmitter<any>();

  constructor() { 
    this.name = '';
    this.date = '';
    this.hour = '';
    this.symptoms = '';
    this.incorrectForm = false;
  }
  
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty  
  }

  addAppointment(): void {
    if (this.name == '' || this.date == '' || this.hour == '' || this.symptoms == '') {
      this.incorrectForm = true;
      return;
    }
    this.incorrectForm = false;

    const appointment = {
      name: this.name,
      date: this.date,
      hour: this.hour,
      symptoms: this.symptoms
    }
    
    this.newAppointment.emit(appointment);
    this.clearFields();    
  }

  clearFields(): void {
    this.name = '';
    this.date = '';
    this.hour = '';
    this.symptoms = '';
  }
}
