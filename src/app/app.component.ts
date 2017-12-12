import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button  [routerLink]="['/users']" mat-raised-button color="primary">users</button>
  <button  [routerLink]="['/login']" mat-raised-button color="primary">login</button>
  <button  [routerLink]="['/register']" mat-raised-button color="primary">register</button>
  <router-outlet></router-outlet>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {}
  ngOnInit() {
  }

 
}
