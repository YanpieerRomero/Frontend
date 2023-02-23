import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://api-ssl.bitly.com/v4/shorten';
  }

  getUrlShort(urlName: string): Observable<any> {
    const body = {
      long_url: urlName,
    };

    return this.http.post(this.url, body)
  }
  
}
