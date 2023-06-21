import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient) { }

  getNews(parameters: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' 
              + parameters.country + '&category=' + parameters.category 
              + '&apiKey=f95fb1ea009d4f52b28d9ad83935fb12';
    return this.http.get(URL);
  }
}
