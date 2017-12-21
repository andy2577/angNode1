import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(data) {
    this.http.post<any>('http://localhost:3000/auth/login', data).subscribe(
      (res: any) => { localStorage.setItem('token', res.token); },
      (err: any) => console.error(err),
      () => {}
  );
  }
  
  get token(){
    return localStorage.getItem('token');
  }

}
