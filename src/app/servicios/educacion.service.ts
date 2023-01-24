import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments.prod';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

    //url ='https://portfolio-ce5k.onrender.com/api/educacion/';
    url = 'http://localhost:8080/api/educacion/';

    constructor(private httpClient: HttpClient) { }

    lista(): Observable<any> {
        return this.httpClient.get(this.url + 'lista');
    }

    getUna(id: number): Observable<any> {
        return this.httpClient.get(this.url + `buscar/${id}`);
    }

    crear(persona: Educacion): Observable<any> {
        return this.httpClient.post(this.url + 'crear', persona);
    }

    editar(inputdata: any): Observable<any> {
        return this.httpClient.put(this.url + 'editar', inputdata)
    }

    borrar(id: number): Observable<any> {
        return this.httpClient.delete(this.url + `delete/${id}`);
    }
}
