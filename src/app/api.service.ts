import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from './model/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly endpoint = 'http://localhost:8080/demoLogin/api/';
  zuSenden = '';

  constructor(private http: HttpClient) {
  }

  //Works
  validateLogin(user: UserModel): Observable<any> {
    console.log('Api Service validate Login()');
    this.zuSenden = ('{"username": "' + user.name + '", "password": "' + user.password + '"}');
    return this.http.post(this.endpoint + 'users/validate', this.zuSenden);
  }
  //unused
  register(user: UserModel): Observable<any> {
    console.log('Api Service register()');
    this.zuSenden = ('{"username": "' + user.name + '", "password": "' + user.password + '"}');
    return this.http.post(this.endpoint + 'users/register', this.zuSenden);
  }
//unused
  getKlassen(userId: number): Observable<any> {
    console.log('Api Service getKlassen()');
    console.log(userId);
    this.zuSenden = userId.toString();
    return this.http.post(this.endpoint + 'klassen/getKlassen', this.zuSenden);
  }
//unused
  getFaecher(klassenId: number): Observable<any> {
    console.log('Api Service getFeacher');
    this.zuSenden = klassenId.toString();
    return this.http.post(this.endpoint + 'faecher/getFaecher', this.zuSenden);
  }
//unused
  getAufgaben(fachId: number): Observable<any>{
    console.log('Api Service getAufgaben');
    this.zuSenden = fachId.toString();
    return this.http.post(this.endpoint + 'aufgaben/getAufgaben', this.zuSenden);
  }
}
