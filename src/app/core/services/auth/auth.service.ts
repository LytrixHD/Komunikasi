import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {USER} from '../../../models/auth/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly endpoint = 'http://localhost:8080/demoLogin/api/';
  zuSenden = '';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  //Works
  validateLogin(user: USER): Observable<any>{
    console.log('Auth Service validate Login()');
    this.zuSenden = ('{"username": "' + user.name + '", "password": "' + user.password + '"}');
    console.log(this.zuSenden);
    return this.http.post(this.endpoint + 'users/validate', this.zuSenden);
  }

  //Works
  registerUser(user: USER): Observable<any>{
    console.log('Auth Service Register user()');
    this.zuSenden = ('{"username": "' + user.name + '", "password": "' + user.password + '"}');
    console.log(this.zuSenden);
    return this.http.post(this.endpoint + 'users/Register', this.zuSenden);
  }
}
