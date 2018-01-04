import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserListService } from './user-list.service';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './../user-table/user-table.component'
import { SharedModule } from './../../shared/shared.module'
@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    
  ],
  declarations: [UserListComponent, UserTableComponent],
  providers: [UserListService]
})
export class UserListModule { }
