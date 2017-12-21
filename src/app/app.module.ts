import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { MessagesComponent } from './messages.component';
import {RegisterModule} from './register/register.module';
import { RegisterComponent } from './register/register.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListModule} from './user/user-list/user-list.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserProfileModule} from './user/user-profile/user-profile.module';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { MessageComponent } from './message/message.component';
import { MessageModule } from './message/message.module';
import { MessageListModule } from './message/message-list/message-list.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorServiceService } from './auth-interceptor-service.service';

const routes = [
  {path: '', component: MessageComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserListComponent},
  {path: 'profile/:id', component: UserProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent
    , MessagesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    RegisterModule ,
    BrowserAnimationsModule,
    LoginModule,
    UserListModule,
    UserProfileModule,
    MessageModule,
    MessageListModule
  ],
  providers: [ApiService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorServiceService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
