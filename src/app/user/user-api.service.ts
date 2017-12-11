import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserApiService {

  constructor(private http: Http) {}

  getUsers(): Observable<any[]> {
   return this.http.get('http://localhost:3000/users')
    .map(this.extractData)
    .catch(this.handleErorr);
  }

  getProfile(id): Observable<any[]> {
    return this.http.get(`http://localhost:3000/profile/${id}`)
     .map(this.extractData)
     .catch(this.handleErorr);
   }

  private extractData(res: Response) {
    return res.json() || {};
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
