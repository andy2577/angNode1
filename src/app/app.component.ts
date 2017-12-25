import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  template: `
  <button  [routerLink]="['/users']" mat-raised-button color="primary">users</button>
  <button *ngIf="isSignIn" (click)=logOut() mat-raised-button color="primary">logout</button>
  <button *ngIf="!isSignIn" [routerLink]="['/login']" mat-raised-button color="primary">login</button>
  <button *ngIf="!isSignIn"  [routerLink]="['/register']" mat-raised-button color="primary">register</button>
  <router-outlet></router-outlet>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSignIn = true;

  constructor(
    private loginService: LoginService
  ) {}
  ngOnInit() {
    this.isSignIn = this.loginService.isLogIn;
  }
  logOut(){
    debugger;
    this.loginService.logOut();
    this.isSignIn = this.loginService.isLogIn;
  }

 
}
