import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetesComponent } from './planetes/planetes.component';
import {RouterModule, Routes} from '@angular/router';
import {NavBarModule} from '../nav-bar/nav-bar.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {path:"", redirectTo:"/planetes", pathMatch:"full"},
  {path:"planetes", component: PlanetesComponent}
];

@NgModule({
  declarations: [PlanetesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
})
export class PlanetesModule { }
