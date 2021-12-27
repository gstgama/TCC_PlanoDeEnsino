import { Component, OnInit } from '@angular/core';
import { PlanoEnsinoModel } from 'src/app/Models/PlanoEnsinoModel';
import { SugestaoPlanoEnsinoModel } from './../../Models/SugestaoPlanoEnsinoModel';
import { SugestaoPlanoEnsinoService } from './../../Services/SugestaoPlanoEnsino.service';

@Component({
  selector: 'app-ConsultaSugestao',
  templateUrl: './ConsultaSugestao.component.html',
  styleUrls: ['./ConsultaSugestao.component.css']
})
export class ConsultaSugestaoComponent implements OnInit {
  SugestaoPlanoEnsinoModel: any;
  constructor(private sugestaoPlanoEnsinoService: SugestaoPlanoEnsinoService) { }

  ngOnInit() {
    this.getSugestoes();
  }

  public plano = new PlanoEnsinoModel;
  public sugestao = new SugestaoPlanoEnsinoModel;
  public sugestoes: SugestaoPlanoEnsinoModel[] = [];
  pagSugestao: number = 1;
  contadorSugestao: number = 10;
  paginaAtualSugestao: number = 1;

  public sugestoesFiltradas: SugestaoPlanoEnsinoModel[] = []
  private _filtrar: string = ''

  public get filtrar(): string {
    return this._filtrar;
  }

  public set filtrar(value: string) {
    this._filtrar = value;
    this.sugestoesFiltradas = this.filtrar ? this.filtrarSugestoes(this.filtrar) : this.sugestoes
  }

  filtrarSugestoes(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.sugestoes.filter(
      (sugestao) => sugestao.dsSugestaoPlanoEnsino.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  getPlanos(){
    var sugestao = this.sugestao.cdSugestaoPlanoEnsino;
    this.sugestaoPlanoEnsinoService.getPlano(sugestao).subscribe(
      (resposta) => {
        this.plano.dsDisciplina = resposta;
        return this.plano.dsDisciplina;
      }
      ,
      (erro: any) => {
        console.error('Não foi possível carregar os planos de ensino.');
      }
    );
  }

  getSugestoes() {
    this.sugestaoPlanoEnsinoService.getAll().subscribe(
      (listaSugestoes: SugestaoPlanoEnsinoModel[]) => {
        this.sugestoes = listaSugestoes;
        this.sugestoesFiltradas = this.sugestoes;
      },
      (erro: any) => {
        console.error('Não foi possivel carregar as Sugestões.');
      }
    );
  }

  abrirDetalhes(sugestao: SugestaoPlanoEnsinoModel) {
    this.sugestao = sugestao;
  }
}