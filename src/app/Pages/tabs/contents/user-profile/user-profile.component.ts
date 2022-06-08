import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from "../../../../core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {
  public cookieTest: string;

  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cookieTest = this.cookieService.get('AccessToken');
  }

  deleteUser(){
    this.authService.deleteUser().subscribe(response => {
      console.log(response.status);
      this.router.navigate(['']);
    });
  }
}
