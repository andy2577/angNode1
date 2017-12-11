import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[];
  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.userListService.getUsers().subscribe(
      (res) => this.users = res,
      (error) => console.error(error)
    );
  }

}
