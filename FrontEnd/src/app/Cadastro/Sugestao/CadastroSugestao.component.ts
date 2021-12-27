import { Component, OnInit } from '@angular/core';
import { PlanoEnsinoService } from 'src/app/Services/PlanoEnsino.service';
import { LivroService } from 'src/app/Services/Livro.service';
import { PlanoEnsinoModel } from 'src/app/Models/PlanoEnsinoModel';
import { LivroModel } from 'src/app/Models/LivroModel';
import { SugestaoPlanoEnsinoModel } from './../../Models/SugestaoPlanoEnsinoModel';
import { SugestaoPlanoEnsinoService } from './../../Services/SugestaoPlanoEnsino.service';
import { LivroPlanoEnsinoService } from 'src/app/Services/LivroPlanoEnsino.service';
@Component({
  selector: 'app-CadastroSugestao',
  templateUrl: './CadastroSugestao.component.html',
  styleUrls: ['./CadastroSugestao.component.css'],
})
export class CadastroSugestaoComponent implements OnInit {
  constructor(
    private planoEnsinoService: PlanoEnsinoService,
    private livroService: LivroService,
    private sugestaoPlanoEnsinoService: SugestaoPlanoEnsinoService,
    private livroPlanoEnsinoService: LivroPlanoEnsinoService
  ) {}

  public planos: PlanoEnsinoModel[] = [];
  public plano = new PlanoEnsinoModel();
  public mostrarListaPlano: boolean = true;
  public dadosPlano = [];
  pagPlano: number = 1;
  contadorPlano: number = 5;
  paginaAtualPlano: number = 1;

  public sugestoes: SugestaoPlanoEnsinoModel[] = [];
  public sugestao = new SugestaoPlanoEnsinoModel();
  public mostrarListaSugestao: boolean = true;
  public dadosSugestao = [];
  pagSugestao: number = 1;
  contadorSugestao: number = 5;
  paginaAtualSugestao: number = 1;
  
  public livroComplementar = new LivroModel;
  public livroBasico = new LivroModel;
  public livros: LivroModel[] = [];
  public livro = new LivroModel();
  public mostrarListaLivro: boolean = true;
  public dadosLivro = [];
  pagLivro: number = 1;
  contadorLivro: number = 5;
  paginaAtualLivro: number = 1;

  public livrosFiltrados: LivroModel[] = [];
  private _filtrar: string = '';

  public get filtrar(): string {
    return this._filtrar;
  }

  public set filtrar(value: string) {
    this._filtrar = value;
    this.livrosFiltrados = this.filtrar
      ? this.filtrarLivros(this.filtrar)
      : this.livros;
  }

  ngOnInit() {
    this.getPlanos();
    this.getLivros();
    this.getSugestoes();
  }

  getPlanos() {
    this.planoEnsinoService.getAll().subscribe(
      (listaPlanos: PlanoEnsinoModel[]) => {
        this.planos = listaPlanos;
        return this.planos;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os planos de ensinos.');
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

  getSugestoes() {
    this.sugestaoPlanoEnsinoService.getAll().subscribe(
      (listaSugestoes: SugestaoPlanoEnsinoModel[]) => {
        this.sugestoes = listaSugestoes;
        return this.sugestoes;
      },
      (erro: any) => {
        console.error(
          'Não foi possível carregar as Sugestões aos Planos de Ensino!'
        );
      }
    );
  }

  filtrarLivros(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.livros.filter(
      (livro) => livro.dsLivro.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                 livro.editora.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                 livro.ano.toString().indexOf(filtrarPor) !== -1
    );
  }

  getLivros() {
    this.livroService.getAll().subscribe(
      (listaLivros: LivroModel[]) => {
        this.livros = listaLivros;
        this.livrosFiltrados = this.livros;
      },
      (erro: any) => {
        console.error('Não foi possivel carregar os livros.');
      }
    );
  }

  saveSugestaoPlano() {
    if (this.sugestao.cdSugestaoPlanoEnsino) {
      this.putSugestaoPlano();
    } else {
      this.postSugestaoPlano();
    }
  }

  postSugestaoPlano() {
    var sugestaoPlano = {
      cdDisciplina: this.plano.cdDisciplina,
      dsSugestaoPlanoEnsino: this.sugestao.dsSugestaoPlanoEnsino,
      dsInclusaoBasica: this.sugestao.dsInclusaoBasica,
      dsExclusaoBasica: this.sugestao.dsExclusaoBasica,
      dsInclusaoComplementar: this.sugestao.dsInclusaoComplementar,
      dsExclusaoComplementar: this.sugestao.dsExclusaoComplementar,
      dtCadastroSugestao: this.sugestao.dtCadastroSugestao,
    };
    this.sugestaoPlanoEnsinoService
      .post(sugestaoPlano)
      .subscribe((resposta) => {});
    alert('Sugestão ao Plano de Ensino cadastrada com sucesso!');
    this.getSugestoes();
  }

  putSugestaoPlano() {
    this.mostrarListaSugestao = true;
    if (confirm('Deseja realmente editar a Sugestão ao Plano de Ensino ?')) {
      alert('A Sugestão ao Plano de Ensino foi atualizada com sucesso!');
      this.sugestaoPlanoEnsinoService
        .put(this.sugestao)
        .subscribe((resposta) => {
          this.sugestao = new SugestaoPlanoEnsinoModel();
        });
      this.getSugestoes();
    } else {
      alert('A Sugestão ao Plano de Ensino NÃO foi atualizada!');
      this.getSugestoes();
    }
  }

  deleteSugestaoPlano(sugestaoPlano: SugestaoPlanoEnsinoModel) {
    this.mostrarListaSugestao = true;
    if(confirm('Deseja realmente excluir a Sugestão ao Plano de Ensino ?')){
      alert('A Sugestão ao Plano de Ensino foi excluída com sucesso!');
      this.sugestaoPlanoEnsinoService.delete(sugestaoPlano).subscribe((resposta) => {});
      this.getSugestoes();
    }
    else{
      alert('A Sugestão ao Plano de Ensino NÃO foi excluída!');
      this.getSugestoes();
    }
    this.getSugestoes();
  }

  abrirDetalhesPlano(plano: PlanoEnsinoModel) {
    this.mostrarListaPlano = true;
    this.plano = plano;
  }

  abrirDetalhesSugestao(sugestao: SugestaoPlanoEnsinoModel) {
    this.mostrarListaSugestao = true;
    this.sugestao = sugestao;
  }

  abrirDetalhesLivro(livro: LivroModel) {
    this.mostrarListaLivro = true;
    this.livro = livro;
  }
}
