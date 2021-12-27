import { Component, OnInit } from '@angular/core';
import { PlanoEnsinoModel } from './../../Models/PlanoEnsinoModel';
import { PlanoEnsinoService } from './../../Services/PlanoEnsino.service';
import { CursoPlanoEnsinoService } from './../../Services/CursoPlanoEnsino.service';
import { CursoModel } from 'src/app/Models/CursoModel';
import { UsuarioModel } from 'src/app/Models/UsuarioModel';
import { UsuarioPlanoEnsinoService } from 'src/app/Services/UsuarioPlanoEnsino.service';
import { LivroPlanoEnsinoService } from 'src/app/Services/LivroPlanoEnsino.service';
import { LivroModel } from 'src/app/Models/LivroModel';

@Component({
  selector: 'app-ConsultaPlanoEnsino',
  templateUrl: './ConsultaPlanoEnsino.component.html',
  styleUrls: ['./ConsultaPlanoEnsino.component.css']
})
export class ConsultaPlanoEnsinoComponent implements OnInit {
  PlanoEnsinoModel: any;
  constructor(private planoEnsinoService: PlanoEnsinoService,
              private cursoPlanoEnsinoService: CursoPlanoEnsinoService,
              private usuarioPlanoEnsinoService: UsuarioPlanoEnsinoService,
              private livroPlanoEnsinoService: LivroPlanoEnsinoService) { }

  ngOnInit() {
    this.getPlanos();
  }

  public livroBasico = new LivroModel;
  public livroComplementar = new LivroModel;
  public usuarioProfessor = new UsuarioModel;
  public cursoConectado = new CursoModel;
  public planos: PlanoEnsinoModel[] = [];
  public plano = new PlanoEnsinoModel;

  pagPlano: number = 1;
  contadorPlano: number = 10;
  paginaAtualPlano: number = 1;

  public planosFiltrados: PlanoEnsinoModel[] = []
  private _filtrar: string = ''

  public get filtrar(): string {
    return this._filtrar;
  }

  public set filtrar(value: string) {
    this._filtrar = value;
    this.planosFiltrados = this.filtrar ? this.filtrarPlanos(this.filtrar) : this.planos
  }

  filtrarPlanos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.planos.filter(
      (plano) => plano.dsDisciplina.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                 plano.anoSemestre.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  getPlanos() {
    this.planoEnsinoService.getAll().subscribe(
      (listarPlanos: PlanoEnsinoModel[]) => {
        this.planos = listarPlanos;
        this.planosFiltrados = this.planos;
      },
      (erro: any) => {
        console.error('Não foi possivel carregar os Planos de Ensino.');
      }
    );
  }

  getLivrosBasico(){
    var plano = this.plano.cdDisciplina;
    this.livroPlanoEnsinoService.getBasico(plano).subscribe(
      (resposta) => {
        this.livroBasico.dsLivro = resposta;
        return this.livroBasico.dsLivro;
      }
      ,
      (erro: any) => {
        console.error('Não foi possível carregar os livros básicos.');
      }
    );
  }

  getLivrosComplementar(){
    var plano = this.plano.cdDisciplina;
    this.livroPlanoEnsinoService.getComplementar(plano).subscribe(
      (resposta) => {
        this.livroComplementar.dsLivro = resposta;
        return this.livroComplementar.dsLivro;
      }
      ,
      (erro: any) => {
        console.error('Não foi possível carregar os livros complementares.');
      }
    );
  }

  getCursoConectado(){
    var plano = this.plano.cdDisciplina;
    this.cursoPlanoEnsinoService.getCurso(plano).subscribe(
      (resposta) => {
        this.cursoConectado.dsCurso = resposta;
        return this.cursoConectado.dsCurso;
      }
      ,
      (erro: any) => {
        console.error('Não foi possível carregar os cursos conectados.');
      }
    );
  }

  getUsuarioConectado(){
    var plano = this.plano.cdDisciplina;
    this.usuarioPlanoEnsinoService.getUsuarioPlano(plano).subscribe(
      (resposta) => {
        this.usuarioProfessor.nome = resposta;
        return this.usuarioProfessor.nome;
      }
      ,
      (erro: any) => {
        console.error('Não foi possível carregar os usuários conectados.');
      }
    );
  }

  abrirDetalhesPlano(plano: PlanoEnsinoModel) {
    this.plano = plano;
  }
}