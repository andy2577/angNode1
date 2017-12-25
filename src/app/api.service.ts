import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import {environment} from './../environments/environment'

@Injectable()
export class ApiService {
  messages =[];
  constructor(private http: Http) {}
  getMessages() {
    this.http.get(environment.path + '/posts').subscribe(
      res => {this.messages = res.json()}
    )
  }
}
