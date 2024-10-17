import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { ActivatedRoute, Router } from '@angular/router';

import { AnimalService } from '../service/animal.service';
import { Regime } from '../model/regime.model';


@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrl: './update-animal.component.css'
})
export class UpdateAnimalComponent implements OnInit {



  currentAnimal = new Animal();
  regimes!: Regime[];
  updateRegId!: number;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService) { }

  ngOnInit(): void {


    this.animalService.listeRegimes().
      subscribe(regs => {
        this.regimes = regs;
        console.log(regs);
      });

    this.animalService.consulterAnimal(this.activatedRoute.snapshot.params['id']).
      subscribe(animal => {
        this.currentAnimal = animal;
        this.updateRegId =
          this.currentAnimal.regime.idRegime;
          console.log(this.currentAnimal);
      
        });
  }

  updateAnimal() {

    this.currentAnimal.regime = this.regimes.find(reg => reg.idRegime == this.updateRegId)!;
   this.animalService.updateAnimal(this.currentAnimal).subscribe(animal => {
   this.router.navigate(['animaux']); }
   );

}
}
