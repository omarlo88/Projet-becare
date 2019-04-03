import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  getUserConnected(){
    return this.authService.getUserConnected();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(["/home"]);
  }


}
