import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {USER} from '../../../../models/auth/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public name: string;
  public password: string;
  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    const user: USER = {
      name: this.name,
      password: this.password
    };
    this.authService.validateLogin(user);
    /*
        console.log(this.name);
        console.log(this.password);
        //this.apiService.test();
        const user = new UserModel(this.name, this.password);
        this.apiService.validateLogin(user).subscribe(response => {
          //alert(response.status);
          //console.log(response.id);
          if (response.id) {
            this.response = 'Welcome user with Id: ' + response.id;
            //user.id = response.id
            //this.demoService.user = user;
             //Hier kommt routing rein
          }
           else{
             this.response = response.status.toString();
          }
          this.response = response.status.toString();
        });
     */
  }
}
