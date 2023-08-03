import { Component } from '@angular/core';
import { userApiService } from 'src/app/components/services/user-services.service';
import { typeNovoUsuario } from '../services/typeUsers';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent{

  msgEmail: any;
  error: any;
  response: string = '';

  user_nome!: string;
  user_email!: string;
  user_senha!: string;
  user_senhaRpt!: string;
  
  constructor(private userApiService: userApiService) {

  }

  cadastraNovoUsuario() {
    this.response = '';

    if( this.validaForm() == true ) {
      if (this.user_senha === this.user_senhaRpt) {
        this.userApiService.insereNovoUsuario(this.user_nome, this.user_email, this.user_senha).subscribe((response) => {
          this.msgEmail = response;
          if (this.msgEmail.alert) {
            this.emailCadastradoAviso();
          } else {
            this.usuarioCadastradoAviso();
            this.limparDados();
          }
        }, (error) => {
          console.log('Erro ao criar usuário:', error);
          this.response = "Erro ao criar usuário.";
        })
      } else {
        this.senhasDiferentesAviso();
      }
    } else {
      this.preencherCamposAviso();
    }
    
  }

  validaForm () {
    if (this.user_nome && this.user_email && this.user_senha && this.user_senhaRpt) {
      return true;
    } else {
      return false;
    }
  }

  limparDados() {
    this.user_nome = '';
    this.user_email = '';
    this.user_senha = '';
    this.user_senhaRpt = '';
  }

  usuarioCadastradoAviso() {
    const avisoCadastrado = (document.querySelector(".cadSuccesso") as HTMLElement)
    avisoCadastrado.classList.add('open');

    setTimeout(() => {
      avisoCadastrado.classList.remove('open');
    }, 4000);

  }

  senhasDiferentesAviso() {
    const avisoSenha = (document.querySelector(".alerta") as HTMLElement)
    avisoSenha.classList.add('open');

    setTimeout(() => {
      avisoSenha.classList.remove('open');
    }, 4000);

  }

  emailCadastradoAviso() {
    const alertaEmail = (document.querySelector(".alertaEmail") as HTMLElement)
    alertaEmail.classList.add('open');

    setTimeout(() => {
      alertaEmail.classList.remove('open');
    }, 4000);

  }

  preencherCamposAviso() {
    const preencherCampos = (document.querySelector(".preencherCampos") as HTMLElement)
    preencherCampos.classList.add('open');

    setTimeout(() => {
      preencherCampos.classList.remove('open');
    }, 4000);

  }

}
