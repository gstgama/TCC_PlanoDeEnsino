import { LivroModel } from './../../Models/LivroModel';
import { LivroService } from './../../Services/Livro.service';
import { Component, OnInit } from '@angular/core';
import { AutorModel } from './../../Models/AutorModel';
import { AutorService } from './../../Services/Autor.service';
import { LivroAutorService } from 'src/app/Services/LivroAutor.service';
import { LivroAutorModel } from './../../Models/LivroAutorModel';
@Component({
  selector: 'app-CadastroLivro',
  templateUrl: './CadastroLivro.component.html',
  styleUrls: ['./CadastroLivro.component.css'],
})
export class CadastroLivroComponent implements OnInit {
  LivroModel: any;
  AutorModel: any;
  LivroAutorModel: any;
  constructor(private livroService: LivroService,
    private autorService: AutorService,
    private livroAutorService: LivroAutorService) { }

  ngOnInit() {
    this.getLivros();
    this.getAutores();
  }

  public livros: LivroModel[] = [];
  public livro = new LivroModel;
  public mostrarListaLivro: boolean = true;
  public dadosLivros = [];
  pagLivro: number = 1;
  contadorLivro: number = 5;
  paginaAtualLivro: number = 1;

  public autores: AutorModel[] = [];
  public autor = new AutorModel;
  public mostrarListaAutor: boolean = true;
  public dadosAutores = [];
  pagAutor: number = 1;
  contadorAutor: number = 5;
  paginaAtualAutor: number = 1;

  public livroAutores: LivroAutorModel[] = [];
  public livroAutor = new LivroAutorModel;

  saveLivro() {
    if (this.livro.cdLivro) {
      this.putLivro();
    } else {
      this.postLivro();
    }
  }

  saveAutor() {
    if (this.autor.cdAutor) {
      this.putAutor();
    } else {
      this.postAutor();
    }
  }

  saveLivroAutor() {
    if (this.livro.cdLivro && this.autor.cdAutor) {
      if(confirm('Deseja realmente conectar Livro e Autor ?')){
        alert('Livro e Autor conectados com sucesso!');
        this.postLivroAutor();
      }
      else{
        alert('Livro e Autor NÃO foram conectados!');
      }
    }
    else{
      alert('O Livro e/ou Autor NÃO foram encontrados!');
    }
  }

  postLivro() {
    this.livroService.post(this.livro).subscribe((resposta) => {
      this.livro = new LivroModel();
    }
    );
    alert('Livro cadastrado com sucesso!');
    this.getLivros();
  }

  postAutor() {
    this.autorService.post(this.autor).subscribe((resposta) => {
      this.autor = new AutorModel();
    }
    );
    alert('Autor cadastrado com sucesso!');
    this.getAutores();
  }

  postLivroAutor() {
    var livroAutor = { cdLivro: this.livro.cdLivro, cdAutor: this.autor.cdAutor }; //variável criada para atribuição de valores após seleção na tela de livro e de autor
    //realização do post diretamente com a variável criada acima
    this.livroAutorService.post(livroAutor).subscribe((resposta) => {
    }
    );
  }

  putLivro() {
    this.mostrarListaLivro = true;
    if(confirm('Deseja realmente editar o livro ?')){
      alert('O livro foi atualizado com sucesso!');
      this.livroService.put(this.livro).subscribe((resposta) => {this.livro = new LivroModel();});
      this.getLivros();
    }
    else{
      alert('O livro NÃO foi atualizado!');
      this.getLivros();
    }
  }

  putAutor() {
    this.mostrarListaAutor = true;
    if(confirm('Deseja realmente editar o autor ?')){
      alert('O autor foi atualizado com sucesso!');
      this.autorService.put(this.autor).subscribe((resposta) => {this.autor = new AutorModel();});
      this.getAutores();
    }
    else{
      alert('O autor NÃO foi atualizado!');
      this.getAutores();
    }
  }

  deleteLivro(livro: LivroModel) {
    this.mostrarListaLivro = true;
    if(confirm('Deseja realmente excluir o livro ?')){
      alert('O livro foi excluído com sucesso!');
      this.livroService.delete(livro).subscribe((resposta) => {});
      this.getLivros();
    }
    else{
      alert('O livro NÃO foi excluído!');
      this.getLivros();
    }
  }

  deleteAutor(autor: AutorModel) {
    this.mostrarListaAutor = true;
    if(confirm('Deseja realmente excluir o autor ?')){
      alert('O autor foi excluído com sucesso!');
      this.autorService.delete(autor).subscribe((resposta) => {});
      this.getAutores();
    }
    else{
      alert('O autor NÃO foi excluído!');
      this.getAutores();
    }
  }

  deleteLivroAutor(livro: LivroModel, autor: AutorModel) {
    if(confirm('Deseja realmente desconectar o livro e autor?')){
      alert('O livro e autor foram desconectados com sucesso!');
      this.livroAutorService.delete(livro,autor).subscribe((resposta) => {});
    }
    else{
      alert('O livro e autor NÃO foram desconectados!');
    }
   }

  getLivros() {
    this.livroService.getAll().subscribe(
      (listaLivros: LivroModel[]) => {
        this.livros = listaLivros;
        return this.livros;
      },
      (erro: any) => {
        alert('Não foi possível carregar os livros.');
      }
    );
  }

  getAutores() {
    this.autorService.getAll().subscribe(
      (listaAutores: AutorModel[]) => {
        this.autores = listaAutores;
        return this.autores;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os autores.');
      }
    );
  }

  abrirDetalhesLivro(livro: LivroModel) {
    this.mostrarListaLivro = true;
    this.livro = livro;
  }

  abrirDetalhesAutor(autor: AutorModel) {
    this.mostrarListaAutor = true;
    this.autor = autor;
  }
}