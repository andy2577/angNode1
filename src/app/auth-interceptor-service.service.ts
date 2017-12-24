import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login/login.service';
@Injectable()
export class AuthInterceptorServiceService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req,next) {
    let service = this.injector.get(LoginService);
    let authReq = req.clone({
      headers: req.headers.set('Authorization','token '+ service.token)
    })
    return next.handle(authReq);

  }
}
