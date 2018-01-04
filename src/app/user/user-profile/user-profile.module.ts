import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { UserApiService } from '../user-api.service';
import { MessageListModule } from '../../message/message-list/message-list.module';

import { SharedModule } from './../../shared/shared.module'
@NgModule({
  imports: [
    MessageListModule,
    SharedModule
  ],
  declarations: [UserProfileComponent],
  providers: [UserApiService]
})
export class UserProfileModule { }
