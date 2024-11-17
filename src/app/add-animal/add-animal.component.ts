import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../service/animal.service';
import { Regime } from '../model/regime.model';
import { Router } from '@angular/router';
import { Image } from '../model/Image.model';

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

  uploadedImage!: File;
  imagePath: any;

  constructor(private animalService : AnimalService,private router :Router)
  {

  }
  
  ngOnInit(): void {
      this.animalService.listeRegimes().
      subscribe(regs => {this.regimes = regs;
      console.log(regs);
      });
      
  }

  addAnimal(){

  this.newAniaml.regime= this.regimes.find(reg => reg.idRegime == this.newIdRegime)!;
    this.animalService.ajouterAnimal(this.newAniaml).subscribe((animal: Animal) => {
        if (this.uploadedImage) {
            this.animalService.uploadImageAnim(this.uploadedImage, this.uploadedImage.name, animal.idAnimal).subscribe(() => {
                this.router.navigate(['animaux']);
            });
        } else {
            this.router.navigate(['animaux']);
        }
    });
  }

  /*addAnimal()
  {

    this.animalService
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
    this.newAniaml.image=img;

    this.newAniaml.regime = this.regimes.find(reg => reg.idRegime == this.newIdRegime)!;
    
    this.animalService.ajouterAnimal(this.newAniaml)
    .subscribe(animal => {
    console.log(animal);
    this.router.navigate(['animaux']);
    });
    
  });
}*/

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
    }

  
}
