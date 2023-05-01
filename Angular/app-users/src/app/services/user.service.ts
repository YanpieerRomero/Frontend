import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string;
  token: string;
  header: any;

  constructor(private http: HttpClient) {
    this.url = 'https://dummyapi.io/data/v1/user';
    this.token =
      '6404efe7f6fc3831628a5fa0';
    this.header = {
      headers: new HttpHeaders().set('app-id', this.token),
    };
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.url, this.header);
  }

  getUser(id: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + id, this.header);
  }
}
