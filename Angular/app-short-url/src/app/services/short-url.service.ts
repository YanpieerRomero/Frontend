import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  url: string;
  //token: string;

  constructor(private http: HttpClient) {
    this.url = 'https://api-ssl.bitly.com/v4/shorten';
    //this.token = 'api-key-bitly';
  }

  getUrlShort(urlName: string): Observable<any> {
    //const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + this.token});

    const body = {
      long_url: urlName,
    };

    return this.http.post(this.url, body, /* { headers: tokenHeader} */)
  }
  
}
