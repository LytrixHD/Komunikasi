import { Component, OnInit } from '@angular/core';
import {UserManagementService} from "../../../services/userManagement/user-management.service";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {USER} from "../../../../models/auth/user.model";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
})
export class ChangePasswordFormComponent implements OnInit {

  public message: string;
  constructor(
    private userManagementService: UserManagementService,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {}

  changePassword(oldPassword: string, newPassword: string, confirmPassword: string) {
    this.message = '';
    if(newPassword !== confirmPassword){
      this.message = 'Passwords have to equal';
      return null;
    }
    const user: USER ={
      name: this.cookieService.get('UserName'),
      password: oldPassword
    };
    this.authService.validateLogin(user).subscribe(validateResponse => {
      if(validateResponse.accessToken){
        this.userManagementService.alterPassword(newPassword).subscribe(alterPwResponse =>{
          this.message = alterPwResponse.status;
        });
      } else{
        this.message = validateResponse.status;
      }
    });
  }
}
