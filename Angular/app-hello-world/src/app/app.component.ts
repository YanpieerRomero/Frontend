import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Databinding
  name = 'Yanpieer';
  placeholderText = 'Type something here';
  disabled = true;
  imgSrc = 'https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-svg-vector.svg';
  text = 'This is a video about Event Binding';
  textDataBinding = '';

  constructor() {
    setInterval(() => this.disabled = false, 3000);
  }

  getSum(numberOne: number, numberTwo: number) {
    return numberOne + numberTwo;
  }

  changeText(): void {
    this.text = 'The next video we go to watch Two Way Data Binding'
  }


  //Directives Structurals
  students: any[] = [
    { name: 'Tomas Gonzales', status: 'Promoted'},
    { name: 'Lucas Perez', status: 'Regular'},
    { name: 'Juan Garcia', status: 'Regular'},
    { name: 'Marta Perez', status: 'Promoted'},
    { name: 'Nicolas Gomez', status: 'Free'},
  ]
  show = true;

  toogle(): void {
    this.show = !this.show;
  }
}
