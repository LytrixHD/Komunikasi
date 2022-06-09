import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent{
constructor(private cookieService: CookieService) {
}
}
