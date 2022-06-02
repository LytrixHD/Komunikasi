import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {USER} from '../../../../models/auth/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public name: string;
  public password: string;
  public message: string;
  public response: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  checkForError(){
    this.message = '';
    if (!this.name){
      this.message += 'Required field: Username';
    }
    if(!this.password){
      this.message += '\nRequired field: Password';
    }
    return this.message !== '';
  }

  login() {
    if(!this.checkForError()) {
      const user: USER = {
        name: this.name,
        password: this.password
      };
      this.authService.validateLogin(user).subscribe(response => {
        //alert(response.status);
        console.log(response.accessToken);
        console.log(response.status);
        if (response.accessToken) {
          //user.id = response.id
          //this.demoService.user = user;
          this.router.navigate(['tabs']);
        }
         else{
           this.message = response.status.toString();
        }
        this.message = response.status.toString();
      });
    }
  }
}
