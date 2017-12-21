import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  saveMessage(message) {
    this.http.post('http://localhost:3000/message',message).subscribe(
      (res) => {console.log('sucesss')},
      (err) => {console.error('errror::::::::',err)},
      () => {}
    )
  }

  saveUser(data) {
    this.http.post('http://localhost:3000/message', data).subscribe(
      (res) => {console.log('sucesss')},
      (err) => {console.error('errror::::::::',err)},
      () => {}
    );
  }

}
