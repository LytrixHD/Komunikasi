import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {USER} from '../../../../models/auth/user.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public name: string;
  public password: string;
  public errorMessage: string;
  public response: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  checkForError(){
    this.errorMessage = '';
    if (!this.name){
      this.errorMessage += 'Required field: Username';
    }
    if(!this.password){
      this.errorMessage += '\nRequired field: Password';
    }
    if(this.errorMessage === ''){
      return false;
    }
    return true;
  }

  login() {
    if(!this.checkForError()) {
      const user: USER = {
        name: this.name,
        password: this.password
      };
      this.router.navigate(['tabs']);
      /*
          this.authService.validateLogin(user).subscribe(response => {
            //alert(response.status);
            console.log(response.id);
            console.log(response.status);
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
}
