import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { Store } from '@ngrx/store';
import * as userAction from './../../../actions/user.action';
import { AppState } from './../../../models/app-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[];
  users$: Observable<any>;
  constructor(private userListService: UserListService,
              private store: Store<AppState>) {

    this.users$ = this.store.select(state => state.users);
               }

  ngOnInit() {
    // this.userListService.getUsers().subscribe(
    //   (res) => this.users = res,
    //   (error) => console.error(error)
    // );
    this.getUsers();
  }

  getUsers() {
    console.log('this.store.dispatch(new userAction.LoadUserAction())');
    this.store.dispatch(new userAction.LoadUserAction());
  }

}
