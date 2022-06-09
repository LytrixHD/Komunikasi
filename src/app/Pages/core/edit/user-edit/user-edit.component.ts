import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit() {}

}
