import { Component, OnInit } from '@angular/core';
import { PlanoEnsinoModel } from './../../Models/PlanoEnsinoModel';
import { PlanoEnsinoService } from './../../Services/PlanoEnsino.service';
import { CursoPlanoEnsinoService } from './../../Services/CursoPlanoEnsino.service';
import { CursoModel } from 'src/app/Models/CursoModel';
import { CursoService } from './../../Services/Curso.service';
import { UsuarioService } from './../../Services/Usuario.service';
import { UsuarioModel } from 'src/app/Models/UsuarioModel';
import { LivroService } from './../../Services/Livro.service';
import { LivroModel } from './../../Models/LivroModel';
import { UsuarioPlanoEnsinoService } from 'src/app/Services/UsuarioPlanoEnsino.service';
import { LivroPlanoEnsinoService } from 'src/app/Services/LivroPlanoEnsino.service';
import { LivroPlanoEnsinoModel } from './../../Models/LivroPlanoEnsino';
@Component({
  selector: 'app-CadastroPlanoEnsino',
  templateUrl: './CadastroPlanoEnsino.component.html',
  styleUrls: ['./CadastroPlanoEnsino.component.css']
})
export class CadastroPlanoEnsinoComponent implements OnInit {

  constructor(private planoEnsinoService: PlanoEnsinoService,
              private cursoPlanoEnsinoService: CursoPlanoEnsinoService,
              private cursoService: CursoService,
              private usuarioService: UsuarioService,
              private livroService: LivroService,
              private usuarioPlanoEnsinoService: UsuarioPlanoEnsinoService,
              private livroPlanoEnsinoService: LivroPlanoEnsinoService) { }

  public planos: PlanoEnsinoModel[] = [];
  public plano = new PlanoEnsinoModel;
  public mostrarListaPlano: boolean = true;
  public dadosPlano = [];
  pagPlano: number = 1;
  contadorPlano: number = 5;
  paginaAtualPlano: number = 1;
  
  public livroComplementar = new LivroModel;
  public livroBasico = new LivroModel;
  public livros: LivroModel[]=[];
  public livro = new LivroModel;
  public mostrarListaLivro: boolean = true;
  public dadosLivro = [];
  pagLivro: number = 1;
  contadorLivro: number = 5;
  paginaAtualLivro: number = 1;

  public livroPlano = new LivroPlanoEnsinoModel;

  public usuarioProfessor = new UsuarioModel;
  public usuarios: UsuarioModel[] = [];
  public usuario = new UsuarioModel;
  public mostrarListaUsuario: boolean = true;
  public dadosUsuario = [];
  pagUsuario: number = 1;
  contadorUsuario: number = 5;
  paginaAtualUsuariio: number = 1;
  
  selecionado: number = 0;
  
  public cursoConectado = new CursoModel;
  public cursos: CursoModel[]=[];
  public curso = new CursoModel;
  public mostrarListaCurso: boolean = true;
  public dadosCurso = [];
  pagCurso: number = 1;
  contadoCurso: number = 5;
  paginaAtualCurso: number = 1;

  ngOnInit(){
    this.getPlanos();
    this.getCursos();
    this.getUsuarios();
    this.getLivros();
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

  getCursos() {
    this.cursoService.getAll().subscribe(
      (listaCursos: CursoModel[]) => {
        this.cursos = listaCursos;
        return this.cursos;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os cursos.');
      }
    );
  }

  getUsuarios(){
    this.usuarioService.getAll().subscribe(
      (listaUsuarios: UsuarioModel[]) => {
        this.usuarios = listaUsuarios;
        return this.usuarios;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os usuários.');
      }
    );
  }

  getLivros(){
    this.livroService.getAll().subscribe(
      (listaLivros: LivroModel[]) => {
        this.livros = listaLivros;
        return this.livros;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os livros.');
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

  savePlano() {
    if (this.plano.cdDisciplina) {
      this.putPlano();
    } else {
      this.postPlano();
    }
  }

  saveCursoPlano() {
    if (this.curso.cdCurso && this.plano.cdDisciplina) {
      if(confirm('Deseja realmente conectar Curso e Plano de Ensino ?')){
        alert('Curso e Plano de Ensino conectados com sucesso!');
        this.postCursoPlanoEnsino();
      }
      else{
        alert('Curso e Plano de Ensino NÃO foram conectados!');
      }
    }
    else{
      alert('O Curso e/ou Plano de Ensino NÃO foram encontrados!');
    }
  }

  saveUsuarioPlano() {
    if (this.usuario.cdUsuario && this.plano.cdDisciplina) {
      if(confirm('Deseja realmente conectar Professor e Plano de Ensino ?')){
        alert('O Professor e Plano de Ensino conectados com sucesso!');
        this.postUsuarioPlanoEnsino();
      }
      else{
        alert('O Professor e Plano de Ensino NÃO foram conectados!');
      }
    }
    else{
      alert('O Professor e/ou Plano de Ensino NÃO foram encontrados!');
    }
  }

  saveLivroPlano() {
    if (this.livro.cdLivro && this.plano.cdDisciplina) {
      if(confirm('Deseja realmente conectar Livro e Plano de Ensino ?')){
        alert('O Livro e Plano de Ensino conectados com sucesso!');
        this.postLivroPlanoEnsino();
      }
      else{
        alert('O Livro e Plano de Ensino NÃO foram conectados!');
      }
    }
    else{
      alert('O Livro e/ou Plano de Ensino NÃO foram encontrados!');
    }
  }

  postPlano() {
    this.planoEnsinoService.post(this.plano).subscribe((resposta) => {
      this.plano = new PlanoEnsinoModel();
    }
    );
    alert('Plano de ensino cadastrado com sucesso!');
    this.getPlanos();
  }

  postCursoPlanoEnsino() {
    var cursoPlanoEnsino = { cdCurso: this.curso.cdCurso, cdDisciplina: this.plano.cdDisciplina }; //variável criada para atribuição de valores após seleção na tela de livro e de autor
    //realização do post diretamente com a variável criada acima
    this.cursoPlanoEnsinoService.post(cursoPlanoEnsino).subscribe((resposta) => {
    }
    );
  }

  postUsuarioPlanoEnsino() {
    var usuarioPlanoEnsino = { cdUsuario: this.usuario.cdUsuario, cdDisciplina: this.plano.cdDisciplina }; //variável criada para atribuição de valores após seleção na tela de livro e de autor
    //realização do post diretamente com a variável criada acima
    this.usuarioPlanoEnsinoService.post(usuarioPlanoEnsino).subscribe((resposta) => {
    }
    );
  }

  postLivroPlanoEnsino() {
    var livroPlanoEnsino = { cdLivro: this.livro.cdLivro, cdDisciplina: this.plano.cdDisciplina, tpBibliografia: this.livroPlano.tpBibliografia}; //variável criada para atribuição de valores após seleção na tela de livro e de autor
    //realização do post diretamente com a variável criada acima
    this.livroPlanoEnsinoService.post(livroPlanoEnsino).subscribe((resposta) => {
    }
    );
  }

  putPlano() {
    this.mostrarListaPlano = true;
    if(confirm('Deseja realmente editar o plano de ensino ?')){
      alert('O plano de ensino foi atualizado com sucesso!');
      this.planoEnsinoService.put(this.plano).subscribe((resposta) => {this.plano = new PlanoEnsinoModel();});
      this.getPlanos();
    }
    else{
      alert('O plano de ensino NÃO foi atualizado!');
      this.getPlanos();
    }
  }

  deleteCursoPlano(curso: CursoModel, plano: PlanoEnsinoModel) {
    if(this.curso.cdCurso && this.plano.cdDisciplina)
      if(confirm('Deseja realmente desconectar o Curso e Plano de Ensino?')){
        alert('O Curso e Plano de Ensino foram desconectados com sucesso!');
        this.cursoPlanoEnsinoService.delete(curso,plano).subscribe((resposta) => {});
      }
      else{
        alert('O Curso e Plano de Ensino NÃO foram desconectados!');
      }
    else{
      alert('O Curso e/ou Plano de Ensino NÃO foram encontrados!');
    }
   }

   deleteUsuarioPlano(usuario: UsuarioModel, plano: PlanoEnsinoModel) {
    if(this.usuario.cdUsuario && this.plano.cdDisciplina)
      if(confirm('Deseja realmente desconectar o Professor e Plano de Ensino?')){
        alert('O Professor e Plano de Ensino foram desconectados com sucesso!');
        this.usuarioPlanoEnsinoService.delete(usuario,plano).subscribe((resposta) => {});
      }

      else{
        alert('O Professor e Plano de Ensino NÃO foram desconectados!');
      }
    else{
      alert('O Professor e/ou Plano de Ensino NÃO foram encontrados!');
    }
   }

   deleteLivroPlano(livro: LivroModel, plano: PlanoEnsinoModel) {
     if(this.livro.cdLivro && this.plano.cdDisciplina)
      if(confirm('Deseja realmente desconectar o Livro e Plano de Ensino?')){
        alert('O Livro e Plano de Ensino foram desconectados com sucesso!');
        this.livroPlanoEnsinoService.delete(livro,plano).subscribe((resposta) => {});
      }
      else{
        alert('O Livro e Plano de Ensino NÃO foram desconectados!');
      }
    else{
      alert('O Livro e/ou Plano de Ensino NÃO foram encontrados!');
    }
   }
  
  abrirDetalhesPlano(plano: PlanoEnsinoModel) {
    this.mostrarListaPlano = true;
    this.plano = plano;
  }

  abrirDetalhesCurso(curso: CursoModel) {
    this.mostrarListaCurso = true;
    this.curso = curso;
  }

  abrirDetalhesUsuario(usuario: UsuarioModel){
    this.mostrarListaUsuario = true;
    this.usuario = usuario;
  }

  abrirDetalhesLivro(livro: LivroModel){
    this.mostrarListaLivro = true;
    this.livro = livro;
  }
}
