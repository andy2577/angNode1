import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  saveMessage(message) {
    this.http.post('http://localhost:3000/message',message).subscribe(
      (res) => res,
      (err) => {console.error(err)}
    )
  }

}
