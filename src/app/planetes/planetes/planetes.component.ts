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
  p: number = 1;

  constructor(private planetesService: PlanetesService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.planetesForm = this.fb.group({
      motCle:['', Validators.pattern("[a-zA-Z ]*")]
    });
    this.planetesService.chercherPlanetes().subscribe(data =>{
      console.log(data);
      this.planetes = data.results;
      console.log(this.planetes);
    }, err =>{
      console.log(err);
    });
  }

  isValide(data){
    return !isNaN(data);
  }

  format(diameter){
    return parseInt(diameter).toLocaleString('fr');
  }

  onChercher(){
    if (this.planetesForm.get('motCle').valid) {
      //this.planetesForm.get('motCle').setValue("");
      console.log(this.planetesForm.value);
    }
  }

}
