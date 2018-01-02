import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListService } from './user-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserTableComponent } from './../user-table/user-table.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [UserListComponent, UserTableComponent],
  providers: [UserListService]
})
export class UserListModule { }
