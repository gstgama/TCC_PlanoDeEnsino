import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { PlanoEnsinoModel } from '../Models/PlanoEnsinoModel';
import { LivroModel } from '../Models/LivroModel';
import { LivroPlanoEnsinoModel } from './../Models/LivroPlanoEnsino';
import { Observable } from 'rxjs';
import { PlanoEnsinoService } from './PlanoEnsino.service';

@Injectable({
  providedIn: 'root',
})
export class LivroPlanoEnsinoService {
  url = environment.domain + 'livroplanoensino';

  public livro = new LivroModel();
  public plano = new PlanoEnsinoModel();
  public livroPlano = new LivroPlanoEnsinoModel();

  constructor(private http: HttpClient) { }

  post(livroPlanoEnsino = {cdLivro: this.livro.cdLivro, cdDisciplina: this.plano.cdDisciplina, tpBibliografia: this.livroPlano.tpBibliografia}) {
    return this.http.post(`${this.url}`, livroPlanoEnsino); //Dentro do post está sendo criado um array com duas informações, estas vão aparecer no corpo da requisição
  }    

  getBasico(plano: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${plano}/basico`);
  }

  getComplementar(plano: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${plano}/complementar`);
  }

  delete(livro: LivroModel, plano: PlanoEnsinoModel) {
    return this.http.delete(`${this.url}/${livro.cdLivro}/${plano.cdDisciplina}`);
  }
}