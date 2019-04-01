import { Component, OnInit } from '@angular/core';
import {PlanetesService} from '../planetes/services/planetes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private planetesService: PlanetesService) { }

  ngOnInit() {
    this.planetesService.chercherPlanetes().subscribe(data =>{
      console.log(data);
    }, err =>{
      console.log(err);
    });
  }

}
