import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { SharedModule } from "./../../shared/shared.module";
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule { }
