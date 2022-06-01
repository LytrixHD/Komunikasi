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
  public errorMessage: string;
  public name: string;
  public password: string;
  public response: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

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

  register() {
    if(!this.checkForError()){
      const user: USER = {
        name: this.name,
        password: this.password
      };
      this.authService.registerUser(user).subscribe(response => {
        //alert(response.status);
        console.log(response.id);
        console.log(response.status);
        if (response.id) {
          this.response = 'New user created, with ID: ' + response.id;
          //user.id = response.id
          //this.demoService.user = user;
          //Hier kommt routing rein
        }
        else{
          this.response = response.status.toString();
        }
        this.response = response.status.toString();
      });
    }
  }
}
