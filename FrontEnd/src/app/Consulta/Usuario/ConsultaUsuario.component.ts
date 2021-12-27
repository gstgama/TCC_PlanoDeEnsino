import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './../../Models/UsuarioModel';
import { UsuarioService } from './../../Services/Usuario.service';

@Component({
  selector: 'app-ConsultaUsuario',
  templateUrl: './ConsultaUsuario.component.html',
  styleUrls: ['./ConsultaUsuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {
  UsuarioModel: any;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  public usuarios: UsuarioModel[] = [];
  pagUsuario: number = 1;
  contadorUsuario: number = 10;
  paginaAtualUsuario: number = 1;

  public usuariosFiltrados: UsuarioModel[] = []
  private _filtrar: string = ''

  public get filtrar(): string {
    return this._filtrar;
  }

  public set filtrar(value: string) {
    this._filtrar = value;
    this.usuariosFiltrados = this.filtrar ? this.filtrarUsuarios(this.filtrar) : this.usuarios
  }

  filtrarUsuarios(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.usuarios.filter(
      usuario => usuario.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                 usuario.login.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                 usuario.tpUsuario.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                 usuario.status.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  getUsuarios() {
    this.usuarioService.getAll().subscribe(
      (listaUsuarios: UsuarioModel[]) => {
        this.usuarios = listaUsuarios;
        this.usuariosFiltrados = this.usuarios;
      },
      (erro: any) => {
        console.error('Não foi possivel carregar os usuários.');
      }
    );
  }
}
