import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { Regime } from '../model/regime.model';

@Component({
  selector: 'app-liste-regimes',
  templateUrl: './liste-regimes.component.html',
  styleUrl: './liste-regimes.component.css'
})
export class ListeRegimesComponent implements OnInit {
  
  regimes!:Regime[];
  updatedReg:Regime = {"idRegime":0,"nomRegime":""};
  ajout:boolean=true;
  
  constructor( private animalService :AnimalService)
  {

  }
  
  ngOnInit(): void {
   
    this.animalService.listeRegimes().
  subscribe(regms => {this.regimes =regms;
});

  }

  RegimeUpdated(reg:Regime)
  {
    
    this.animalService.ajouterRegime(reg).
 subscribe( ()=> this.chargerRegimes());
  }

  chargerRegimes(){
    this.animalService.listeRegimes().
    subscribe(regs => {this.regimes = regs;
  
    });
    }

    updateReg(reg:Regime)
    {
      this.updatedReg=reg;
      this.ajout=false;
    }

}
