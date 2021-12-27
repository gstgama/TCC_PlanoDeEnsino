import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { PlanoEnsinoModel } from '../Models/PlanoEnsinoModel';
import { UsuarioModel } from './../Models/UsuarioModel';

@Injectable({
  providedIn: 'root',
})
export class UsuarioPlanoEnsinoService {
  url = environment.domain + 'usuarioplanoensino';

  public usuario = new UsuarioModel();
  public plano = new PlanoEnsinoModel();

  constructor(private http: HttpClient) { }

  post(usuarioPlanoEnsino = {cdUsuario: this.usuario.cdUsuario, cdDisciplina: this.plano.cdDisciplina}) {
    return this.http.post(`${this.url}`, usuarioPlanoEnsino); //Dentro do post está sendo criado um array com duas informações, estas vão aparecer no corpo da requisição
  }                                                          //para tratamento do backend e assim, inserção no banco de dados

  getUsuarioPlano(plano: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${plano}`);
  }

  delete(usuario: UsuarioModel, plano: PlanoEnsinoModel) {
    return this.http.delete(`${this.url}/${usuario.cdUsuario}/${plano.cdDisciplina}`);
  }
}