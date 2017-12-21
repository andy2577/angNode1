import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class MessageListService {

  constructor(private http: HttpClient) { }


  getMessages(id): Observable<any[]> {
    return this.http.get(`http://localhost:3000/messages/${id}`)
     .map(this.extractData)
     .catch(this.handleErorr);
   }

   private extractData(res: Response) {
    return res|| [];
  }

  private handleErorr(error: Response | any) {

   
    return Observable.throw(error);
  }
}
