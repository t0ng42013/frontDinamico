import { Injectable } from '@angular/core';
//1-observa el codigo asincronico de un json o bd
import { Observable } from 'rxjs';
//2-hace peticiones
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
// //3-
//     constructor(private http:HttpClient) {
    
//     }
//     //4-metodo obserbable para traer datos del json
//     getDatos(): Observable<any>{
//         return this.http.get('./assets/json/portfolio.json');
//     }
    
//     personaURL = 'http://localhost:8080/persona/';

//     constructor(private httpClient: HttpClient) { }
    
//     public lista(): Observable<Persona[]>{
//         return this.httpClient.get<Persona[]>(this.personaURL + 'lista');
//     }

//     public create(persona: Persona): Observable<any>{
//         return this.httpClient.post<any>(this.personaURL + 'persona', persona);
//     }

//     public editar(persona: Persona): Observable<any>{
//         return this.httpClient.put(this.personaURL + 'editar', persona);
//     }

//     public delete(id: number): Observable<any>{
//         return this.httpClient.delete<any>(this.personaURL + 'delete/${id}');
//     }

}
