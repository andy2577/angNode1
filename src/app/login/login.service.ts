import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../environments/environment'
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(data) {
    this.http.post<any>(environment.path+'/auth/login', data).subscribe(
      (res: any) => { localStorage.setItem('token', res.token); },
      (err: any) => console.error(err),
      () => {}
  );
  }
  
  get token(){
    return localStorage.getItem('token');
  }
  logOut () {
    localStorage.removeItem('token');
  }

  get isLogIn(){
    return !!localStorage.getItem('token');
  }

}
