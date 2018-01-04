import { NgModule } from '@angular/core';
import { MessageListComponent } from './message-list.component';
import { MessageListService } from './message-list.service';
import { SharedModule } from "./../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MessageListComponent],
  providers: [MessageListService],
  exports:[MessageListComponent]
})
export class MessageListModule { }
