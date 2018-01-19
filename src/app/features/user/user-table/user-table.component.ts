import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() users: any[];

  constructor() { }

  ngOnInit() {
  }

}
