import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserApiService } from '../user-api.service';
import { MessageListModule } from '../../message/message-list/message-list.module';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MessageListModule
  ],
  declarations: [UserProfileComponent],
  providers: [UserApiService]
})
export class UserProfileModule { }
