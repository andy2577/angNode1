import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  saveUser(data) {
    this.http.post('http://localhost:3000/auth/register', data).subscribe(
      (res) => {},
      (err) => {},
      () => {}
    );
  }

}
