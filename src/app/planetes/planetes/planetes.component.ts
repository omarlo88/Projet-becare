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
  public pageCurrente: number = 1;
  public totalPages:Array<number>;
  private size: number = 10;

  constructor(private planetesService: PlanetesService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.planetesForm = this.fb.group({
      motCle:['', Validators.pattern("[a-zA-Z ]*")]
    });
    this.ongetPlanetes();
  }

  isValide(data){
    return !isNaN(data);
  }

  format(diameter){
    return parseInt(diameter).toLocaleString('fr');
  }

  ongetPlanetes(){
    if (this.planetesForm.get('motCle').valid) {
      //this.planetesForm.get('motCle').setValue("");
      console.log(this.planetesForm.value);
      this.planetesService.getPlanetes(this.pageCurrente).subscribe(data =>{
        console.log(data);
        this.planetes = data.results;
        let nbPages = data.count / this.size;
        this.totalPlanetes = data.count;
        if (this.totalPlanetes % this.size != 0) {
          nbPages = Math.trunc(nbPages);
          ++nbPages;
          console.log(nbPages);
        }
        this.totalPages = new Array<number>(nbPages);
      }, err =>{
        console.log(err);
      });
    }
  }

  goToPage(i: number){
    this.pageCurrente = i + 1;
    this.ongetPlanetes();
  }

  onChercherParMotCle(){
    let inputValue = this.planetesForm.get('motCle');
    if (inputValue.valid) {
      this.planetesService.chercherPlanetesParMotCle(inputValue.value).subscribe(data =>{
        console.log(data);
        this.planetes = data.results;
        this.totalPlanetes = data.count;
      }, err =>{
        console.log(err);
      });
    }
  }

}
