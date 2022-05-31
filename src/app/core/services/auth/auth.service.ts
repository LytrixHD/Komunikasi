import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {USER} from '../../../models/auth/user.model';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly endpoint = 'http://localhost:8080/demoLogin/api/';
  zuSenden = '';

  constructor(
    private router: Router
  ) {}

  //Works
  validateLogin(user: USER){
    console.log(user.name + ', ' + user.password);
    /*
    console.log('Api Service validate Login()');
    this.zuSenden = ('{"username": "' + user.name + '", "password": "' + user.password + '"}');
    return this.http.post(this.endpoint + 'users/validate', this.zuSenden);
    */
    this.router.navigate(['']);
  }
}
