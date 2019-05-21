import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly host: string = "http://localhost:8080";
  private jwt: string = null;
  private roles:Array<string>=[];
  private userConnected: string;
  private nameToken = "token";

  constructor(private http: HttpClient) { }

  login(data: FormData){
    return this.http.post(this.host + "/login", data, {observe:'response'});
  }

  saveToken(jwt:string){
    this.jwt = jwt;
    localStorage.setItem(this.nameToken, jwt);
    this.parseJWT();
  }

  loadToken(){
    this.jwt = localStorage.getItem(this.nameToken);
    this.parseJWT();
  }

  parseJWT(){
    let jwtHelper = new JwtHelperService();
    let res = jwtHelper.decodeToken(this.jwt);
    //console.log(res);
    this.userConnected = res.sub;
    this.roles = res.roles;
  }

  getToken(){
    if (this.jwt == null) {this.loadToken()};
    return this.jwt;
  }

  isAuthenticated(){
    return this.roles.length != 0;
  }

  getUserConnected(){
    return this.userConnected;
  }

  isAdmin(){
    return this.roles.indexOf("ADMIN") != -1;
  }

  isAdminProd(){
    return this.roles.indexOf("ADMIN_PROD") != -1;
  }

  isUser(){
    return this.roles.indexOf("USER") != -1;
  }

  logout() {
    localStorage.removeItem(this.nameToken);
    this.jwt = null;
    this.roles = [];
    this.userConnected = null;
  }
}
