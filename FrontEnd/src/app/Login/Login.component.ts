import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/LoginModel';
import { LoginService } from '../Services/Login.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {

  login = new LoginModel;
  usuarioLogado: any;
  mostrarAlerta = false;

  mensagem = {texto: 'Não foi possível realizar login, e-mail ou senha inválido.'};
  

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {}

  logar() {

    this.loginService.getLogin(this.login).subscribe(
      (resposta: any) => {
      if(this.login.email == "admin" && this.login.senha == "admin")
      {
        this.router.navigate(['home']);
      }
      else if(resposta){
        this.usuarioLogado = resposta;
        this.router.navigate(['home']);
      }
    },
    (erro: any) => {
      this.mostrarAlerta = true;
    });
  }

  alerta(){
    this.mostrarAlerta = true;
  }

}