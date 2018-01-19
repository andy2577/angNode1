import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../core/login.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isSignIn = true;
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.isSignIn = this.loginService.isLogIn;
  }
  logOut() {
    debugger;
    this.loginService.logOut();
    this.isSignIn = this.loginService.isLogIn;
  }
}
