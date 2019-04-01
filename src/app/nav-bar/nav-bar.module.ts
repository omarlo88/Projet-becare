import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from './nav-bar.component';
import {AppModule} from '../app.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule
  ],
  exports:[NavBarComponent]
})
export class NavBarModule { }
