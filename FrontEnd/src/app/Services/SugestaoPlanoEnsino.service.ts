import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { PlanoEnsinoModel } from '../Models/PlanoEnsinoModel';
import { SugestaoPlanoEnsinoModel } from './../Models/SugestaoPlanoEnsinoModel';

@Injectable({
  providedIn: 'root',
})
export class SugestaoPlanoEnsinoService {
  url = environment.domain + 'sugestaoplanoensino';

  public plano = new PlanoEnsinoModel();
  public sugestao = new SugestaoPlanoEnsinoModel();

  constructor(private http: HttpClient) { }

  post(sugestaoPlano = {cdDisciplina: this.plano.cdDisciplina,
                        dsSugestaoPlanoEnsino: this.sugestao.dsSugestaoPlanoEnsino,
                        dsInclusaoBasica: this.sugestao.dsInclusaoBasica,
                        dsExclusaoBasica: this.sugestao.dsExclusaoBasica,
                        dsInclusaoComplementar: this.sugestao.dsInclusaoComplementar,
                        dsExclusaoComplementar: this.sugestao.dsExclusaoComplementar,
                        dtCadastroSugestao: this.sugestao.dtCadastroSugestao}) {
    return this.http.post(`${this.url}`, sugestaoPlano);
  }

  put(sugestaoplano: SugestaoPlanoEnsinoModel) {
    return this.http.put(`${this.url}`, sugestaoplano);
  }

  getAll(): Observable<SugestaoPlanoEnsinoModel[]> {
    return this.http.get<SugestaoPlanoEnsinoModel[]>(`${this.url}`);
  }

  getPlano(sugestao: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${sugestao}`);
  }

  delete(sugestaoPlano: SugestaoPlanoEnsinoModel) {
    return this.http.delete(`${this.url}/${sugestaoPlano.cdSugestaoPlanoEnsino}`);
  }
}