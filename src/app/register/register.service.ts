import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  saveUser(data) {
    this.http.post('http://localhost:3000/register',data).subscribe(
      (res) => {},
      (err) => {},
      () => {}
    )
  }

}
