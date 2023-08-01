import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { typeNovoUsuario  } from './typeUsers';

@Injectable({
  providedIn: 'root'
})
export class userApiService {

  API = 'http://localhost:3000';

  novoUsuario = `${this.API}/novo-usuario`;

  constructor(private httpClient: HttpClient) { }

  insereNovoUsuario(user_nome: String, user_email: String, user_senha: String) {
    const usuario = {
      user_nome : user_nome,
      user_email : user_email,
      user_senha : user_senha,
      user_incdate : new Date()
    }
    return this.httpClient.post<typeNovoUsuario[]>(this.novoUsuario, usuario)
  }

   
}
