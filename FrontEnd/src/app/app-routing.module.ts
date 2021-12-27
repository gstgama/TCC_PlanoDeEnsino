import { ConsultaSugestaoComponent } from './Consulta/Sugestao/ConsultaSugestao.component';
import { ConsultaCursoComponent } from './Consulta/Curso/ConsultaCurso.component';
import { ConsultaUsuarioComponent } from './Consulta/Usuario/ConsultaUsuario.component';
import { ConsultaLivroComponent } from './Consulta/Livro/ConsultaLivro.component';
import { ConsultaPlanoEnsinoComponent } from './Consulta/PlanoEnsino/ConsultaPlanoEnsino.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCursoComponent } from './Cadastro/Curso/CadastroCurso.component';
import { CadastroLivroComponent } from './Cadastro/Livro/CadastroLivro.component';
import { CadastroPlanoEnsinoComponent } from './Cadastro/PlanoEnsino/CadastroPlanoEnsino.component';
import { CadastroSugestaoComponent } from './Cadastro/Sugestao/CadastroSugestao.component';
import { CadastroUsuarioComponent } from './Cadastro/Usuario/CadastroUsuario.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';

const routes: Routes = [
  //Sempre que criado um novo componente, dever ser declarado aqui, para manuseio de rotas e modules.
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'cadastro-plano-de-ensino', component: CadastroPlanoEnsinoComponent },
  { path: 'cadastro-livro', component: CadastroLivroComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'cadastro-curso', component: CadastroCursoComponent },
  { path: 'cadastro-sugestao', component: CadastroSugestaoComponent },
  { path: 'consulta-plano-de-ensino', component: ConsultaPlanoEnsinoComponent },
  { path: 'consulta-livro', component: ConsultaLivroComponent },
  { path: 'consulta-usuario', component: ConsultaUsuarioComponent },
  { path: 'consulta-curso', component: ConsultaCursoComponent },
  { path: 'consulta-sugestao', component: ConsultaSugestaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}