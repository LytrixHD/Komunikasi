import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpUrlEncodingCodec} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClassManagementService {
  // readonly endpoint = 'http://10.13.45.122:8080/demoLogin/api/';
  readonly endpoint = 'http://localhost:8080/komunikasi/api/';
  private zuSenden: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}


  //Works
  getUserClasses(): Observable<any>{
    console.log('Class Management getUserClasses()');
    const myParams = new HttpParams().set('id', this.cookieService.get('AccessToken'));
    console.log(myParams);
    return this.http.get(this.endpoint + 'users/getclasses', { params: myParams});
  }

  createClass(className: string): Observable<any>{
   console.log('User Management createClass()');
    this.zuSenden = ('{"accessToken": "' + this.cookieService.get('AccessToken') + '", "classname": "' + className +'"}');
   return this.http.post(this.endpoint + 'classes/create', this.zuSenden);
  }
}
