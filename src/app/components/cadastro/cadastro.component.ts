import { Component } from '@angular/core';
import { userApiService } from 'src/app/components/services/user-services.service';
import { typeNovoUsuario } from '../services/typeUsers';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent{

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
    console.log(this.user_senha)
    console.log(this.user_senhaRpt)
    if (this.user_senha === this.user_senhaRpt) {
      this.userApiService.insereNovoUsuario(this.user_nome, this.user_email, this.user_senha).subscribe((response) => {
        this.usuarioCadastradoAviso();
        this.limparDados();
        this.response = 'Usuário criado com sucesso!';
      }, (error) => {
        console.log('Erro ao criar usuário:', error);
        this.response = "Erro ao criar usuário.";
      })
    } else {
      this.senhasDiferentesAviso();
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
    }, 3000);

  }

  senhasDiferentesAviso() {
    const avisoSenha = (document.querySelector(".alerta") as HTMLElement)
    avisoSenha.classList.add('open');

    setTimeout(() => {
      avisoSenha.classList.remove('open');
    }, 3000);

  }

}
