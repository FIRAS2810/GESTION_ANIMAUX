import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { Animal } from '../model/animal.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent implements OnInit {
  
  animals!:Animal[];
  nomAnimal!:string;
  searchTerm!:string;

  constructor(private animalService : AnimalService)
  {

  }
  ngOnInit(): void {
    this.animalService.listeAnimals().subscribe(anims => {
      console.log(anims);
      this.animals = anims;
      });
      
  }

  rechercheranimals()
  {
    this.animalService.rechercherParNom(this.nomAnimal).
    subscribe(anims => {
    this.animals = anims;
    });
  }

}
