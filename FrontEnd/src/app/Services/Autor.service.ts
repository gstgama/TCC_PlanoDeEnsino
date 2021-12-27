import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { AutorModel } from '../Models/AutorModel';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  url = environment.domain + 'autor';

  constructor(private http: HttpClient) { }

  post(autor: AutorModel) {
    return this.http.post(`${this.url}`, autor);
  }

  getAll(): Observable<AutorModel[]> {
    return this.http.get<AutorModel[]>(`${this.url}`);
  }

  put(autor: AutorModel) {
    return this.http.put(`${this.url}`, autor);
  }

  delete(autor: AutorModel) {
    return this.http.delete(`${this.url}/${autor.cdAutor}`);
  }
}
