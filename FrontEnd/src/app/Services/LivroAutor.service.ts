import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { LivroModel } from './../Models/LivroModel';
import { AutorModel } from './../Models/AutorModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivroAutorService {
  url = environment.domain + 'livroautor';

  public livro = new LivroModel();
  public autor = new AutorModel();

  constructor(private http: HttpClient) { }

  post(livroAutor = {cdLivro: this.livro.cdLivro, cdAutor: this.autor.cdAutor}) {
    return this.http.post(`${this.url}`, livroAutor); //Dentro do post está sendo criado um array com duas informações, estas vão aparecer no corpo da requisição
  }                                                   //para tratamento do backend e assim, inserção no banco de dados

  getAutor(livro: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${livro}`);
  }

  delete(livro: LivroModel, autor: AutorModel) {
    return this.http.delete(`${this.url}/${livro.cdLivro}/${autor.cdAutor}`);
  }
}
