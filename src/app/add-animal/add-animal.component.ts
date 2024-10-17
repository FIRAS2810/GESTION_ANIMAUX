import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../service/animal.service';
import { Regime } from '../model/regime.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrl: './add-animal.component.css'
})
export class AddAnimalComponent implements OnInit {
  
  newAniaml = new Animal();

  newIdRegime!:number;
  newRegime !: Regime;

  regimes!  : Regime[];
  constructor(private animalService : AnimalService,private router :Router)
  {

  }
  
  ngOnInit(): void {
      this.animalService.listeRegimes().
      subscribe(regs => {this.regimes = regs;
      console.log(regs);
      });
      
  }

  addAnimal()
  {
    this.newAniaml.regime = this.regimes.find(reg => reg.idRegime == this.newIdRegime)!;
    this.animalService.ajouterAnimal(this.newAniaml)
    .subscribe(animal => {
    console.log(animal);
    this.router.navigate(['animaux']);
    });
    
  }

  
}
