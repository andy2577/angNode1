import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { SharedModule } from "./../../shared/shared.module";
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: RegisterComponent, pathMatch: 'full'}])
    
  ],
  providers: [RegisterService],
  declarations: [RegisterComponent],
  exports:[RegisterComponent]
})

export class RegisterModule { }
