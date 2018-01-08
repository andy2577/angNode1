import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../../../environments/environment'


@Injectable()
export class MessageListService {

  constructor(private http: HttpClient) { }


  getMessages(id): Observable<any[]> {
    return this.http.get(environment.path + `/messages/${id}`)
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
