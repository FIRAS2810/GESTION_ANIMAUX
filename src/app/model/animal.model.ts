import { Regime } from "./regime.model";

export class Animal {
    idAnimal! : number;
    nomAnimal? : string;
    prixAnimal? : number;
    dateNaissance? : Date ;
    regime! : Regime;
}