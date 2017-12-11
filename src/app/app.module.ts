import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { MessagesComponent } from './messages.component';
import {RegisterModule} from './register/register.module'
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent
    , MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    RegisterModule ,
    BrowserAnimationsModule   
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
