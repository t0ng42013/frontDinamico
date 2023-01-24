import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

    //url='https://portfolio-ce5k.onrender.com/api/banner/';
    url = 'http://localhost:8080/api/banner/';
    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Banner[]> {
        return this.httpClient.get<Banner[]>(this.url + 'lista');
    }

    public create(banner: Banner): Observable<any> {
        return this.httpClient.post<any>(this.url + 'create', banner);
    }

    public editar(banner: Banner): Observable<any> {
        return this.httpClient.put(this.url + 'editar', banner);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.url + 'delete/${id}');
    }
}
