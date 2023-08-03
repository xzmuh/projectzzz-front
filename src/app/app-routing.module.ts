import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { TermosComponent } from './components/termos/termos.component';
import { LoginComponent } from './components/login/login.component';
// import { CadastroConcluidoComponent } from './components/cadastro-concluido/cadastro-concluido.component';
import { HomeComponent } from './components/home/home.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'cadastro', component: CadastroComponent },
  { path:'termos', component: TermosComponent },
  // { path:'cadastroconcluido', component: CadastroConcluidoComponent },
  { path:'home', component: HomeComponent },
  { path:'recuperarsenha', component: RecuperarSenhaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
