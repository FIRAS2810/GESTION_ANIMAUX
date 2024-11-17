import { Image } from "./Image.model";
import { Regime } from "./regime.model";

export class Animal {
    idAnimal! : number;
    nomAnimal? : string;
    prixAnimal? : number;
    dateNaissance? : Date ;
    regime!: Regime;
    image!: Image;
    imageStr!:string;
    images!:Image[];
}