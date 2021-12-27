import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './../../Models/UsuarioModel';
import { UsuarioService } from './../../Services/Usuario.service';

@Component({
  selector: 'app-CadastroUsuario',
  templateUrl: './CadastroUsuario.component.html',
  styleUrls: ['./CadastroUsuario.component.css'],
})
export class CadastroUsuarioComponent implements OnInit {
  UsuarioModel: any;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  public usuarios: UsuarioModel[] = [];
  public usuario = new UsuarioModel;
  public mostrarListaUsuario: boolean = true;
  public dadosUsuario = [];
  pagUsuario: number = 1;
  contadorUsuario: number = 5;
  paginaAtualUsuario: number = 1;

  saveUsuario() {
    if (this.usuario.cdUsuario) {
      this.putUsuario();
    } else {
      this.postUsuario();
    }
  }

  postUsuario() {
    this.usuarioService.post(this.usuario).subscribe((resposta) => {
      this.usuario = new UsuarioModel();
    }
    );
    alert('Usuário cadastrado com sucesso!');
    this.getUsuarios();
  }

  putUsuario() {
    this.mostrarListaUsuario = true;
    if(confirm('Deseja realmente editar o usuário ?')){
      alert('O usuário foi atualizado com sucesso!');
      this.usuarioService.put(this.usuario).subscribe((resposta) => {this.usuario = new UsuarioModel();});
      this.getUsuarios();
    }
    else{
      alert('O usuário NÃO foi atualizado!');
      this.getUsuarios();
    }
  }

  getUsuarios() {
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

  abrirDetalhesUsuario(usuario: UsuarioModel) {
    this.mostrarListaUsuario = true;
    this.usuario = usuario;
  }
}
