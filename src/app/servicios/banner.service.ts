import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

    URL = 'http://localhost:8080/api/banner/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Banner[]> {
        return this.httpClient.get<Banner[]>(this.URL + 'lista');
    }

    public create(banner: Banner): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'crear', banner);
    }

    public editar(banner: Banner): Observable<any> {
        return this.httpClient.put(this.URL + 'editar', banner);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + 'delete/${id}');
    }
}
