import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

    url = 'http://localhost:8080/api/experiencia/';

    constructor(private httpClient: HttpClient) { }

    lista(): Observable<any> {
        return this.httpClient.get(this.url + 'lista');
    }

    getUnaExp(id: number): Observable<any> {
        return this.httpClient.get(this.url + `buscar/${id}`);
    }

    crear(persona: Experiencia): Observable<any> {
        return this.httpClient.post(this.url + 'crear', persona);
    }

    editar(inputdata: any): Observable<any> {
        return this.httpClient.put(this.url + 'editar', inputdata)
    }

    borrar(id: number): Observable<any> {
        return this.httpClient.delete(this.url + `delete/${id}`);
    }
}
