import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImage: string;
  city: string;
  temperature: number;
  humidity: number;
  weather: string;
  query: boolean;
  loading: boolean;
  showError: boolean;
  errorMessage: string;

  constructor(private _weatherService: WeatherService) {
    this.urlImage = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
    this.city = '';
    this.temperature = 0;
    this.humidity = 0;
    this.weather = '';
    this.query = false;
    this.loading = false;
    this.showError = false;
    this.errorMessage = '';
  }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  getWeather(): void {
    this.query = false;
    this.loading = true;
    this._weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.loading = false;
        this.query = true;
        this.temperature = data.main.temp - 273;
        this.humidity = data.main.humidity;
        this.weather = data.weather[0].main;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
        this.handleError(error);
      }
    });
  }

  handleError(errorData: any): void {
    this.showError = true;
    this.errorMessage = errorData.error.message;
    setTimeout(() => {
      this.showError = false;
      this.city = '';
    }, 3000)
  }
}
