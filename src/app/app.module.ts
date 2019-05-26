import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {PlanetesModule} from './planetes/planetes.module';
import {NavBarModule} from './nav-bar/nav-bar.module';
import {TokenInterceptorService} from './interceptors/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    PlanetesModule,
    NavBarModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
