import { Local } from './../models/Local';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8090/scanntech/business/v1/locals';
   }

  getLocals(): Observable<any> {    
    return this.http.get(this.url);
  }

  getLocal(localCode: string): Observable<Local> {
    return this.http.get<Local>(this.url + '/' + localCode);
  }

  postLocal(localBody: Local): Observable<any> {
    return this.http.post(this.url, localBody);
  }

  putLocal(localBody: Local): Observable<any> {
    console.log(this.url + '/' + localBody.localCode);    
    return this.http.put(this.url + '/' + localBody.localCode, localBody);
  }
  
  deleteLocal(localCode: string): Observable<any> {
    return this.http.delete(this.url + '/' + localCode);
  }

}
