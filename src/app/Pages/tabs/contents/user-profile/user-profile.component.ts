import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent{
constructor(
  private cookieService: CookieService,
  private router: Router
) {}

  logout(){
    this.cookieService.deleteAll();
    this.router.navigate(['']);
  }
}
