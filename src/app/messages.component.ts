import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-messages',
  template: `
    < [routerLink]="['/profile',user._id]>
  `,
})
export class MessagesComponent implements OnInit {

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getMessages();
  }
}
