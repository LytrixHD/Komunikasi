import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

import {CookieService} from 'ngx-cookie-service';

import {HttpHeaders, HttpUrlEncodingCodec} from "@angular/common/http";
import {HttpClient} from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  // readonly endpoint = 'http://10.13.45.122:8080/demoLogin/api/';
  readonly endpoint = 'http://localhost:8080/komunikasi/api/';

  codec = new HttpUrlEncodingCodec();
  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*');

  zuSenden = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  //Works not anymore
    deleteUser(): Observable<any>{
      console.log('User Management Service Delete User()');
      const myParams = new HttpParams().set('id', this.cookieService.get('AccessToken'));
      console.log(myParams);
      return this.http.delete(this.endpoint + 'users/delete', { params: myParams});
    }

  //Works but Backend Error
  alterPassword(password: string): Observable<any>{
    console.log('alter Password');
    this.zuSenden = ('{"accessToken": "' + this.cookieService.get('AccessToken') + '", "password": "' + password + '"}');
    console.log(this.zuSenden);
    return this.http.post(this.endpoint + 'users/alter', this.zuSenden);
  }
}
