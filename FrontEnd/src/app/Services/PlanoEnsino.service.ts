import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { PlanoEnsinoModel } from './../Models/PlanoEnsinoModel';

@Injectable({
  providedIn: 'root',
})
export class PlanoEnsinoService {
  url = environment.domain + 'planoensino';

  constructor(private http: HttpClient) { }

  post(plano: PlanoEnsinoModel) {
    return this.http.post(`${this.url}`, plano);
  }

  put(plano: PlanoEnsinoModel) {
    return this.http.put(`${this.url}`, plano);
  }

  getAll(): Observable<PlanoEnsinoModel[]> {
    return this.http.get<PlanoEnsinoModel[]>(`${this.url}`);
  }
}