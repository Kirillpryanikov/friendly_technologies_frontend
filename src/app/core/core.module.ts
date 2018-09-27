import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './token.interceptor';
import { UserService } from './services/user.service';
import { GuestGuard } from './guards/guest.guard';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthGuard, 
    GuestGuard,
    AuthService,     
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UserService
  ]
})
export class CoreModule { }
