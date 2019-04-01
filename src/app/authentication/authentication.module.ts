import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrerComponent } from './user/registrer/registrer.component';

@NgModule({
  declarations: [UserComponent, LoginComponent, RegistrerComponent],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
