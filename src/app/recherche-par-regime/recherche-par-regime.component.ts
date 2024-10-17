import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { Regime } from '../model/regime.model';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-recherche-par-regime',
  templateUrl: './recherche-par-regime.component.html',
  styleUrl: './recherche-par-regime.component.css'
})
export class RechercheParRegimeComponent implements OnInit {
  constructor( private animalService : AnimalService)
  {

  }

  anims!:Animal[];
  IdRegime!:number;
  regimes!:Regime[]
  
  ngOnInit(): void {
   
    this.animalService.listeRegimes().
subscribe(regs => {this.regimes = regs;

});

  }


  onChange() {
    this.animalService.rechercherParRegimee(this.IdRegime).
    subscribe(animals =>{this.anims=animals});
    }



}
