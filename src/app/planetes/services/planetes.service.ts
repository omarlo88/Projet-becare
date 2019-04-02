import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; utf-8',
    Accept : 'application/json; utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanetesService {

  private readonly baseUrl: string = "https://swapi.co/api";
  private planetsRessources : string = "/planets/";

  constructor(private http: HttpClient) { }

  chercherPlanetesParMotCle(motCle: string): Observable<any>{
    return this.http.get<any>(this.baseUrl + `${this.planetsRessources}` + "?search="+ motCle.trim(),
      httpOptions);
  }

  getPlanetes(page:number): Observable<any>{
    return this.http.get<any>(this.baseUrl + this.planetsRessources + "?page=" +page,
      httpOptions);
  }
}
