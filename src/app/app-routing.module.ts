import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { TermosComponent } from './components/termos/termos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'cadastro', component: CadastroComponent },
  { path:'termos', component: TermosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
