import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modeles/user';
import { AuthService } from 'src/app/_service/auth.service';
import { TokenService } from 'src/app/_service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User = {username : "", password : ""}
  title = 'DT Prototype';

  constructor(private authService : AuthService, private tokenService : TokenService, private router : Router){}
ngOnInit(): void {
  }
  login(){
    this.authService.login(this.user).subscribe(res => {
      this.tokenService.setToken(res.access)
      this.router.navigate(['/data'])
    })
  }
}