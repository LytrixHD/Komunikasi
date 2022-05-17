import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from './model/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly endpoint = 'http://localhost:8080/demoLogin/api/users/validate';
  zuSenden = '';

  constructor(private http: HttpClient) {
  }
  validateLogin(user: UserModel): Observable<any>{
    console.log('Api Service validate Login()');
    this.zuSenden = ('{"username": "' + user.name + '", "password": "' + user.password + '"}');
    return this.http.post(this.endpoint, this.zuSenden);
  }
}
