import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { LoginModel } from '../Models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url = environment.domain + 'login';

  constructor(private http: HttpClient) { }

  getLogin(login: LoginModel) {
    return this.http.post(`${this.url}`, login);
  }

}
