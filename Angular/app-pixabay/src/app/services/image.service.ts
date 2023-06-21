import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private error$ = new Subject<string>();
  private searchTerm$ = new Subject<string>();

  constructor(private http: HttpClient) { /* TODO document why this constructor is empty */ }

  setError(message: string): void {
    this.error$.next(message);
  }

  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  sendSearchTerm(term: string): void {
    this.searchTerm$.next(term);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm$.asObservable();
  }
  
  getImages(term: string, imagesBypage: number, currentlyPage: number): Observable<any> {
    const KEY = '33912733-22794d307cca4feb7bdfc08a0';
    const URL = 'https://pixabay.com/api/?key=' + KEY + '&q=' + term + 
                '&per_page=' + imagesBypage + '&page=' + currentlyPage;
    return this.http.get(URL);
  }

}
