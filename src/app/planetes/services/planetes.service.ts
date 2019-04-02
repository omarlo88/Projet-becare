import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetesService {

  private readonly baseUrl: string = "https://swapi.co/api";
  private planetsRessources : string = "/planets/";

  constructor(private http: HttpClient) { }

  chercherPlanetes(): Observable<any>{
    //let url = this.baseUrl + `${this.planetsRessources}` + "?page=1";
    return this.http.get<any>(this.baseUrl + `${this.planetsRessources}`);
  }
}
