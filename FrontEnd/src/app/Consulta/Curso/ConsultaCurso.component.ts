import { Component, OnInit } from '@angular/core';
// import { timingSafeEqual } from 'crypto';
import { CursoModel } from './../../Models/CursoModel';
import { CursoService } from './../../Services/Curso.service';

@Component({
  selector: 'app-ConsultaCurso',
  templateUrl: './ConsultaCurso.component.html',
  styleUrls: ['./ConsultaCurso.component.css']
})
export class ConsultaCursoComponent implements OnInit {
  CursoModel: any;
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.getCursos();
  }

  public cursos: CursoModel[] = [];
  pagCurso: number = 1;
  contadorCurso: number = 10;
  paginaAtualCurso: number = 1;

  public cursosFiltrados: CursoModel[] = []
  private _filtrar: string = ''

  public get filtrar(): string {
    return this._filtrar;
  }

  public set filtrar(value: string) {
    this._filtrar = value;
    this.cursosFiltrados = this.filtrar ? this.filtrarCursos(this.filtrar) : this.cursos;
  }

  filtrarCursos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.cursos.filter(
      curso => curso.dsCurso.toLocaleLowerCase().indexOf(filtrarPor) !== -1     ||
               curso.tpGraduacao.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  getCursos() {
    this.cursoService.getAll().subscribe(
      (listaCursos: CursoModel[]) => {
        this.cursos = listaCursos;
        this.cursosFiltrados = this.cursos;
      },
      (erro: any) => {
        console.error('Não foi possivel carregar os cursos.');
      }
    );
  }
}
