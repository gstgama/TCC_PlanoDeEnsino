import { LivroModel } from './../../Models/LivroModel';
import { LivroService } from './../../Services/Livro.service';
import { Component, OnInit } from '@angular/core';
import { AutorModel } from 'src/app/Models/AutorModel';
import { LivroAutorService } from 'src/app/Services/LivroAutor.service';

@Component({
  selector: 'app-ConsultaLivro',
  templateUrl: './ConsultaLivro.component.html',
  styleUrls: ['./ConsultaLivro.component.css'],
})
export class ConsultaLivroComponent implements OnInit {
  LivroModel: any;
  constructor(private livroService: LivroService,
              private livroAutorService: LivroAutorService) { }

  ngOnInit() {
    this.getLivros();
  }

  public autorConectado = new AutorModel;
  public livros: LivroModel[] = [];
  public livro = new LivroModel;
  pagLivro: number = 1;
  contadorLivro: number = 10;
  paginaAtualLivro: number = 1;

  public livrosFiltrados: LivroModel[] = []
  private _filtrar: string = ''

  public get filtrar(): string {
    return this._filtrar;
  }

  public set filtrar(value: string) {
    this._filtrar = value;
    this.livrosFiltrados = this.filtrar ? this.filtrarLivros(this.filtrar) : this.livros
  }

  filtrarLivros(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.livros.filter(
      (livro) => livro.dsLivro.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                 livro.editora.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                 livro.ano.toString().indexOf(filtrarPor) !== -1
    )
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

  getAutores(){
    var livro = this.livro.cdLivro;
    this.livroAutorService.getAutor(livro).subscribe(
      (resposta) => {
        this.autorConectado.nome = resposta;
        return this.autorConectado.nome;
     },
      (erro: any) => {
        console.error('Não foi possível carregar os autores.');
      }
    );
  }

  abrirDetalhesLivro(livro: LivroModel) {
    this.livro = livro;
  }
}
