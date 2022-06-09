import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from "@angular/router";
import {UserManagementService} from "../../../../core/services/userManagement/user-management.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {
  public cookieTest: string;
  public message: string;
  public password: string;

  constructor(
    private cookieService: CookieService,
    private authService: UserManagementService,
    private router: Router
  ) { }

  checkForError(){
    this.message = '';
    if(!this.password){
      this.message += '\nRequired field: Password';
    }
    return this.message !== '';
  }

  ngOnInit() {
    this.cookieTest = this.cookieService.get('AccessToken');
  }

  deleteUser(){
    this.authService.deleteUser().subscribe(response => {
      console.log(response.status);
      this.router.navigate(['']);
    });
  }

  alterpassword(){
    this.authService.alterPassword(this.password).subscribe(response =>{
      console.log(response.status);
    });
  }
}
