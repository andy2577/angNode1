import { Injectable } from '@angular/core';

import * as userAction from "./../actions/user.action";
import { Effect, Actions, toPayload } from "@ngrx/effects";

import { UserListService } from './../user/user-list/user-list.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class UserEffects {

  constructor(
    private userListService: UserListService,
    private actions$: Actions
  ) { }

// tslint:disable-next-line:member-ordering
  @Effect() loadUsers$ = this.actions$.ofType(userAction.LOAD_USERS).
  switchMap(() => {
    return this.userListService.loadUsers().
  map(users => (new userAction.LoadUserActionSuccess(users)))
});

}
