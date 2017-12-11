import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  loginUser(data) {
    this.http.post('http://localhost:3000/login', data).subscribe(
      (res: any) => { localStorage.setItem('token', res.json().token); },
      (err: any) => console.error(err),
      () => {}
  );
  }

}
