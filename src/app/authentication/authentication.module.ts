import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import {NavBarModule} from '../nav-bar/nav-bar.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from '../guards/auth.guard';
import {AdminGuard} from '../guards/admin.guard';

const routes: Routes = [
  {path:"users", component: ListeUsersComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {path:"user", component: UserComponent,
    children:[
      {path:"", redirectTo:"register", pathMatch: "full"},
      {path:"login", component: LoginComponent},
      {path:"register", component: RegisterComponent}
    ]
  }
];

@NgModule({
  declarations: [UserComponent, LoginComponent, RegisterComponent, ListeUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavBarModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
