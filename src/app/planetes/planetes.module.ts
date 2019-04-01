import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetesComponent } from './planetes/planetes.component';
import {RouterModule, Routes} from '@angular/router';
import {NavBarModule} from '../nav-bar/nav-bar.module';

const routes: Routes = [
  {path:"", redirectTo:"/planetes", pathMatch:"full"},
  {path:"planetes", component: PlanetesComponent}
];

@NgModule({
  declarations: [PlanetesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavBarModule
  ],
})
export class PlanetesModule { }
