import { Component, OnInit } from '@angular/core';
import {USER} from '../../../../models/auth/user.model';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public message: string;
  public name: string;
  public password: string;
  public response: string;


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {}

  checkForError(){
    this.message = '';
    if (!this.name){
      this.message += 'Required field: Username';
    }
    if(!this.password){
      this.message += '\nRequired field: Password';
    }
    if(this.message === ''){
      return false;
    }
    return true;
  }

  register() {
    if(!this.checkForError()){
      const user: USER = {
        name: this.name,
        password: this.password
      };
      this.authService.registerUser(user).subscribe(response => {
        //alert(response.status);
        console.log(response.status);
          this.authService.validateLogin(user).subscribe(responseLogin =>{
            //alert(response.status);
            console.log(responseLogin.accessToken);
            console.log(responseLogin.status);
            if (responseLogin.accessToken) {
              //user.id = response.id
              //this.demoService.user = user;
              this.router.navigate(['tabs']);
            }
            else{
              this.message = responseLogin.status.toString();
            }
            this.message = responseLogin.status.toString();
          });
      });
    }
  }
}
