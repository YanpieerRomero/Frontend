
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly URL = environment.api;

    constructor(private http: HttpClient/* , private cookie: CookieService */) { }

    sendCredentials(email: string, password: string): Observable<User> {
        const body = {
            email,
            password,
        };
        return this.http.post(`${this.URL}/auth/login`, body)
            .pipe(
                tap((responseOk: any) => {
                    console.log('Session iniciada correcta', responseOk);
                    /* const { tokenSession } = responseOk;
                    this.cookie.set('token_service', tokenSession, 4, '/'); */
                })
            );
    }
}