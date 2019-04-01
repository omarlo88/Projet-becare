import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {RouterModule} from '@angular/router';
import {NavBarModule} from '../nav-bar/nav-bar.module';


@NgModule({
  declarations: [UserComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    //NavBarModule
  ],
})
export class AuthenticationModule { }
