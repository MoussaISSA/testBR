import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../modeles/user';
import { Token } from '../modeles/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
   URL : string = 'http://127.0.0.1:8000/api/login/'
  login(user : User ){
    return this.http.post<Token>(this.URL, user)
  }
}
