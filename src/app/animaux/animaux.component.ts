import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../service/animal.service';
import { AuthService } from '../service/auth.service';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrl: './animaux.component.css'
})
export class AnimauxComponent implements OnInit {

  anims?: Animal[];
  images !:Image
  imageStr!:string;
  /*animal! : Animal;*/

  constructor(private animalService: AnimalService,
  public authService: AuthService) {

  }

  ngOnInit(): void {
    this.chargerAnimals();
  };


  chargerAnimals() {
    this.animalService.listeAnimals().subscribe(animes => {
      this.anims = animes;
      this.anims.forEach((animal) => {
      animal.imageStr = 'data:' + animal.images[0].type + ';base64,' +
      animal.images[0].image;
      });
      });
      
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




  

