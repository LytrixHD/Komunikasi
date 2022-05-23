import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {UserModel} from '../model/user-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name: string;
  password: string;
  response: string;
  constructor(public apiService: ApiService,private router: Router) {
  }

  ngOnInit() {}

    login() {
  this.router.navigate( ['/tabs/dashboard']);
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
