import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../service/animal.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrl: './animaux.component.css'
})
export class AnimauxComponent implements OnInit {

  anims!: Animal[];

  /*animal! : Animal;*/

  constructor(private animalService: AnimalService,
  public authService: AuthService) {

  }

  ngOnInit(): void {
    this.chargerAnimals();
  };


chargerAnimals() {
  this.animalService.listeAnimals().subscribe(animals => {

    this.anims = animals;
  })
}

supprimerAnimal(anim : Animal)
{
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.animalService.supprimerAnimal(anim.idAnimal).subscribe(() => {
      console.log("animal supprimé");
      this.chargerAnimals();
    });
}
}




