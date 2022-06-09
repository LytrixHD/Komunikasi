import { Component, OnInit } from '@angular/core';
import {USER} from "../../../../models/auth/user.model";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})

export class LoginFormComponent {
  public message: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  login(formName: string, formPassword: string) {
      const user: USER = {
        name: formName,
        password: formPassword
      };
      this.authService.validateLogin(user).subscribe(response => {
        //alert(response.status);
        if (response.accessToken) {
          this.cookieService.set('AccessToken', response.accessToken);
          this.cookieService.set('UserName', user.name);
          //user.id = response.id
          //this.demoService.user = user;
          this.router.navigate(['tabs']);
        }
        this.message = response.status.toString();
      });
    }
  }
