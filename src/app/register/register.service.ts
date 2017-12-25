import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { HttpClient } from '@angular/common/http';
import {environment} from './../../environments/environment'
@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  saveUser(data) {
    this.http.post(environment.path+'/auth/register', data).subscribe(
      (res) => {},
      (err) => {},
      () => {}
    );
  }

}
