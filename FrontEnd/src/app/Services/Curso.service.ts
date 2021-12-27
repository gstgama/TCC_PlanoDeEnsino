import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { CursoModel } from './../Models/CursoModel';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = environment.domain + 'curso';

  constructor(private http: HttpClient) { }

  post(curso: CursoModel) {
    return this.http.post(`${this.url}`, curso);
  }

  getAll(): Observable<CursoModel[]> {
    return this.http.get<CursoModel[]>(`${this.url}`);
  }

  put(curso: CursoModel) {
    return this.http.put(`${this.url}`, curso);
  }

  delete(curso: CursoModel) {
    return this.http.delete(`${this.url}/${curso.cdCurso}`);
  }
}