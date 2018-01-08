import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from "./login.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { AuthInterceptorServiceService } from './auth-interceptor-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LoginService
    // ,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorServiceService,
    //   multi: true
    // }
  ]
})
export class CoreModule { }
