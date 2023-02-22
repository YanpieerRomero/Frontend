import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appointmentsList: any[] = [];

  addAppointment(appointment: any): void {    
    this.appointmentsList.push(appointment);
  }

  removeAppointment(index: number): void {
    this.appointmentsList.splice(index, 1);
  }
}
