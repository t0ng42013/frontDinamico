import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
    //url = 'https://portfolio-ce5k.onrender.com/api/skill/';
    url = 'http://localhost:8080/api/skill/';

    constructor(private httpClient: HttpClient) { }

    lista(): Observable<any> {
        return this.httpClient.get(this.url + 'lista');
    }

    getUna(id: number): Observable<any> {
        return this.httpClient.get(this.url + `buscar/${id}`);
    }

    crear(persona: Skill): Observable<any> {
        return this.httpClient.post(this.url + 'crear', persona);
    }

    editar(inputdata: any): Observable<any> {
        return this.httpClient.put(this.url + 'editar', inputdata)
    }

    borrar(id: number): Observable<any> {
        return this.httpClient.delete(this.url + `delete/${id}`);
    }

}
