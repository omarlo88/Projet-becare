import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly host: string = "http://localhost:8080/AuthenticationRestController";
  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.host + "/Users");
  }
}
