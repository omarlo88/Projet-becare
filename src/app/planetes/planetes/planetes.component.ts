import { Component, OnInit } from '@angular/core';
import {PlanetesService} from '../services/planetes.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-planetes',
  templateUrl: './planetes.component.html',
  styleUrls: ['./planetes.component.css']
})
export class PlanetesComponent implements OnInit {

  /*  planetes = [];
      planetes1 : Array<any> =[]; des façons de déclarer des tableaux de n'importe quel type*/

  planetes: any[] = []; // autre façon de déclarer des tableaux de n'importe quel type
  planetesForm: FormGroup;
  totalPlanetes : number;
  urlNext: string = "";
  urlPrevious: string = "";
  p: number = 1;

  constructor(private planetesService: PlanetesService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.planetesForm = this.fb.group({
      motCle:['', Validators.pattern("[a-zA-Z ]*")]
    });
    this.onChercherParMotCle();
  }

  isValide(data){
    return !isNaN(data);
  }

  format(diameter){
    return parseInt(diameter).toLocaleString('fr');
  }

  onChercherParMotCle(){
    if (this.planetesForm.get('motCle').valid) {
      //this.planetesForm.get('motCle').setValue("");
      console.log(this.planetesForm.value);
      this.planetesService.chercherPlanetes().subscribe(data =>{
        console.log(data);
        this.planetes = data.results;
        this.totalPlanetes = data.count;
        this.urlNext = data.next;
        this.urlPrevious = data.urlPrevious;
        console.log(this.planetes);
        console.log(this.totalPlanetes);
        console.log(this.urlNext);
        console.log(this.urlPrevious);
      }, err =>{
        console.log(err);
      });
    }
  }

}
