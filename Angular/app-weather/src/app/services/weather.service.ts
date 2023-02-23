import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: string;
  key: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://api.openweathermap.org/data/2.5/weather?q=';
    this.key = 'bfb3855e65506017fa26bc85b3f46b6f';
  }

  getWeather(city: string): Observable<any> {
    const URL = this.url + city + '&appid=' + this.key;  
    return this.http.get(URL)
  }
}
