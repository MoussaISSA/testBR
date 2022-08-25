import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode, * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

 jwtHelper = new JwtHelperService();
  jwtToken : string =''  
  decodedToken: any;
  constructor() {
    this.jwtToken = localStorage.getItem('token') ?? "";
   }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
      localStorage.setItem('token', token)
    }
  }

  decodeToken() {
    if (this.jwtToken) {
    this.decodedToken = jwtDecode(this.jwtToken);
    }
  }

  public isAuthenticated(): boolean {   
     const token = localStorage.getItem('token');    // Check whether the token is expired and return
  // true or false
  return !this.jwtHelper.isTokenExpired(token ?? "");
}
}


