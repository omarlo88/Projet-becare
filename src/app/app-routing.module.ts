import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './authentication/user/user.component';
import {LoginComponent} from './authentication/user/login/login.component';
import {RegisterComponent} from './authentication/user/register/register.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"user", component: UserComponent,
    children:[
      {path:"", redirectTo:"register", pathMatch: "full"},
      {path:"login", component: LoginComponent},
      {path:"register", component: RegisterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
