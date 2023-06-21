import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-spotify';
  name: string = 'Yanpieer';
  age: number = 28;
  phone: null = null;
  phone1: undefined = undefined;
  datum: any;

  car: CarModel = {
    brand: 'Ford',
    model: 'Focus',
    year: 2023,
  };

  listCars: Array<CarModel> = [
    {
        brand: 'Chevrolet',
        model: 'Camaro',
        year: 2021
    },
    {
        brand: 'BMW',
        model: 'AMG 200',
        year: 2022
    }
  ]
}

interface CarModel {
  brand: string;
  model: string;
  year?: number;
}
