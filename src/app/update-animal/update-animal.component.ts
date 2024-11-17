import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { ActivatedRoute, Router } from '@angular/router';

import { AnimalService } from '../service/animal.service';
import { Regime } from '../model/regime.model';
import { Image } from '../model/Image.model';


@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrl: './update-animal.component.css'
})
export class UpdateAnimalComponent implements OnInit {


  currentAnimal = new Animal();
  regimes!: Regime[];
  updateRegId!: number;

  myImage!: string;

  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService) { }

    ngOnInit(): void {
      this.animalService.listeRegimes().subscribe(regs => {
        this.regimes = regs;
        console.log(regs);
      });
    
      this.animalService.consulterAnimal(this.activatedRoute.snapshot.params['id']).subscribe(animal => {
        this.currentAnimal = animal;
        this.updateRegId = this.currentAnimal.regime.idRegime;
    
        // Charger seulement images[0] dans myImage s'il existe
        if (this.currentAnimal.images && this.currentAnimal.images.length > 0) {
          const firstImage = this.currentAnimal.images[0];
          this.myImage = 'data:' + firstImage.type + ';base64,' + firstImage.image;
        }
    
        console.log(this.currentAnimal);
      });
    }
    

  /*ngOnInit(): void {


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
        console.log(this.currentAnimal.image.idImage)
        this.animalService
          .loadImage(this.currentAnimal.image.idImage)
          .subscribe((img: Image) => {
            this.myImage = 'data:' + img.type + ';base64,' + img.image;
          });

      });
  }*/


  updateAnimal() {
    this.currentAnimal.regime = this.regimes.find(rege => rege.idRegime ==
      this.updateRegId)!;
      this.animalService
      .updateAnimal(this.currentAnimal)
      .subscribe((rege) => {
      this.router.navigate(['animaux']);
      });
  }


  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.uploadedImage = input.files[0];
      this.isImageUpdated = true;

      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => {
        this.myImage = reader.result as string;
      };
    }
  }

  onAddImageAnimal() {
    this.animalService
      .uploadImageAnim(this.uploadedImage,
        this.uploadedImage.name, this.currentAnimal.idAnimal)
      .subscribe((img: Image) => {
        this.currentAnimal.images.push(img);
      });
  }


  supprimerImage(img: Image){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.animalService.supprimerImage(img.idImage).subscribe(() => {
    //supprimer image du tableau currentProduit.images
    const index = this.currentAnimal.images.indexOf(img, 0);
    if (index > -1) {
    this.currentAnimal.images.splice(index, 1);
    }
    });
    }


}


