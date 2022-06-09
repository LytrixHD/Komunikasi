import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {USER} from '../../../../models/auth/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent{

  public message: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  register(formName: string, formPassword: string) {
    const user: USER = {
      name: formName,
      password: formPassword
    };
    this.authService.registerUser(user).subscribe(response => {
      //alert(response.status);
      this.message = response.status;
      if (this.message === 'Register Successful!'){
        this.authService.validateLogin(user).subscribe(responseLogin => {
          //alert(response.status);
          console.log(responseLogin.accessToken);
          console.log(responseLogin.status);
          if (responseLogin.accessToken) {
            //user.id = response.id
            //this.demoService.user = user;
            this.router.navigate(['tabs']);
          } else {
            this.message = responseLogin.status.toString();
          }
          this.message = responseLogin.status.toString();
        });
      }
    });
  }
}
