import { UrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  validMessage = ''

  constructor(public auth: AuthService, public router : Router) { }

  ngOnInit(): void {
  }

    loginWithredirect():void{
      this.auth.loginWithRedirect();
    }

}
