import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../../environments/environment'
@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  saveMessage(message) {
    this.http.post(environment.path + '/message',message).subscribe(
      (res) => {console.log('sucesss')},
      (err) => {console.error('errror::::::::',err)},
      () => {}
    )
  }

  saveUser(data) {
    this.http.post(environment.path+'/message', data).subscribe(
      (res) => {console.log('sucesss')},
      (err) => {console.error('errror::::::::',err)},
      () => {}
    );
  }

}
