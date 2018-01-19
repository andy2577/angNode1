import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login.service';
@Injectable()
export class AuthInterceptorServiceService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req, next) {
    const service = this.injector.get(LoginService);
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'token ' + service.token)
    });
    return next.handle(authReq);
  }
}
