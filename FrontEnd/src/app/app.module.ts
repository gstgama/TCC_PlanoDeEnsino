import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroLivroComponent } from './Cadastro/Livro/CadastroLivro.component';
import { CadastroPlanoEnsinoComponent } from './Cadastro/PlanoEnsino/CadastroPlanoEnsino.component';
import { CadastroUsuarioComponent } from './Cadastro/Usuario/CadastroUsuario.component';
import { LoginComponent } from './Login/Login.component';
import { CadastroCursoComponent } from './Cadastro/Curso/CadastroCurso.component';
import { CadastroSugestaoComponent } from './Cadastro/Sugestao/CadastroSugestao.component';
import { ConsultaLivroComponent } from './Consulta/Livro/ConsultaLivro.component';
import { ConsultaCursoComponent } from './Consulta/Curso/ConsultaCurso.component';
import { ConsultaUsuarioComponent } from './Consulta/Usuario/ConsultaUsuario.component';
import { ConsultaPlanoEnsinoComponent } from './Consulta/PlanoEnsino/ConsultaPlanoEnsino.component'; 
import { MenuComponent } from './Menu/Menu.component';
import { HomeComponent } from './Home/Home.component';
import { ConsultaSugestaoComponent } from './Consulta/Sugestao/ConsultaSugestao.component';

@NgModule({
  declarations: [					    //Declarar os componentes criados aqui para que possa ser usada as diretivas e chamadas para API
    AppComponent,
      LoginComponent,
      CadastroLivroComponent,
      CadastroPlanoEnsinoComponent,
      CadastroUsuarioComponent,
      CadastroCursoComponent,
      CadastroSugestaoComponent,
      ConsultaLivroComponent,
      ConsultaCursoComponent,
      ConsultaUsuarioComponent,
      ConsultaPlanoEnsinoComponent,
      ConsultaSugestaoComponent,
      HomeComponent,
      MenuComponent
   ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }