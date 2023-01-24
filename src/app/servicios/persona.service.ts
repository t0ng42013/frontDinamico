import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
    
    //url ='https://portfolio-ce5k.onrender.com/api/persona/';
    url = 'http://localhost:8080/api/persona/';
    constructor(private httpClient: HttpClient) { }

    getPersonas(): Observable<any> {
        return this.httpClient.get(this.url + 'lista');
    }

    getUnaPersona(id: number): Observable<any> {
        return this.httpClient.get(this.url + `buscar/${id}`);
    }

    crearPersoan(persona: Persona): Observable<any> {
        return this.httpClient.post(this.url + 'create', persona);
    }

    editarPersona(inputdata: any): Observable<any> {
        return this.httpClient.put(this.url + 'editar', inputdata)
    }

    borrarPersona(id: number): Observable<any> {
        return this.httpClient.delete(this.url + `delete/${id}`);
    }



}
