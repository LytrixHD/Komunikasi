import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {USER} from '../../../models/auth/user.model';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // readonly endpoint = 'http://10.13.45.122:8080/demoLogin/api/';
  readonly endpoint = 'http://localhost:8080/komunikasi/api/';

  zuSenden = '';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  //Works
  validateLogin(user: USER): Observable<any> {
    console.log('Auth Service validate Login()');
    this.zuSenden = ('{"username": "' + user.name + '", "password": "' + user.password + '"}');
    console.log(this.zuSenden);
    return this.http.post(this.endpoint + 'users/validate', this.zuSenden, );
  }

  //Works
  registerUser(user: USER): Observable<any> {
    console.log('Auth Service Register user()');
    this.zuSenden = ('{"username": "' + user.name + '", "password": "' + user.password + '"}');
    console.log(this.zuSenden);
    return this.http.post(this.endpoint + 'users/register', this.zuSenden);
  }
}
