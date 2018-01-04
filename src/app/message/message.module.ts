import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { SharedModule } from "./../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MessageComponent],
  providers: [MessageService],
  exports:[MessageComponent]
})
export class MessageModule { }
