import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserApiService {

  constructor(private http: HttpClient) {}

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
    return res || {};
  }

  private handleErorr(error: Response | any) {

    return Observable.throw(error);
  }


}
