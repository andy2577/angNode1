import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, PreloadAllModules } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListModule} from './features/user/user-list/user-list.module';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserProfileModule} from './features/user/user-profile/user-profile.module';
import { UserProfileComponent } from './features/user/user-profile/user-profile.component';
import { MessageComponent } from './features/message/message.component';
import { MessageModule } from './features/message/message.module';
import { MessageListModule } from './features/message/message-list/message-list.module';
import { StoreModule } from "@ngrx/store";
import { userReducer } from "./reducers/user.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./effects/user.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavigationModule } from "./features/navigation/navigation.module";
import { CoreModule } from "./core/core.module";

const routes = [
  {path: '', component: MessageComponent },
  {path: 'register', loadChildren: 'app/features/register/register.module#RegisterModule'},
  {path: 'home', component: AppComponent},
  {path: 'login', loadChildren: 'app/features/login/login.module#LoginModule'},
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
    RouterModule.forRoot(routes,{enableTracing: false, preloadingStrategy: PreloadAllModules}),
    CoreModule,
    BrowserAnimationsModule,
    UserListModule,
    UserProfileModule,
    MessageModule,
    MessageListModule,
    StoreModule.forRoot({users: userReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    NavigationModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
