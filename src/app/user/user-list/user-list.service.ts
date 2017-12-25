import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {environment} from './../../../environments/environment'
@Injectable()
export class UserListService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
   return this.http.get(environment.path+'/users')
    .map(this.extractData)
    .catch(this.handleErorr);
  }
  
  private extractData(res: Response) {
    return res || {};
  }

  private handleErorr(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
