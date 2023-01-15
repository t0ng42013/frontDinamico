import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Credentials } from '../model/Credentials';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    url = 'http://localhost:8080/'
    constructor(private httpClient: HttpClient) { }

    login(creds: Credentials) {
        return this.httpClient.post('http://localhost:8080/login', creds, {
            observe: 'response'
        }).pipe(map((Response: HttpResponse<any>) => {
            const body = Response.body;
            const headers = Response.headers;

            const bearerToken = headers.get('Authorization')!;
            const token = bearerToken.replace('Bearer ', '');

            localStorage.setItem('token', token);

            return body;
        }))
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
