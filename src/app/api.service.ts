import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from './model/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly endpoint = 'https://appserei.com/demoApi/api';

  constructor(private http: HttpClient) {
  }
  validateLogin(user: UserModel): Observable<any>{
    console.log('Api Service validate Login()');
    return this.http.post(this.endpoint + '/users' + '/validate/', user);
  }
}
