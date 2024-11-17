import { Injectable } from '@angular/core';
import { Animal } from '../model/animal.model';
import { Regime } from '../model/regime.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Image } from '../model/Image.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  apiURL: string = 'http://localhost:8080/animaux/api';
  apiURLReg: string = 'http://localhost:8080/animaux/api/reg';
  anims!: Animal[];

  regimes !: Regime[];
  animal !: Animal;
  constructor(private http: HttpClient,private authService:AuthService) {

    /*this.regimes=[
      {idRegime:1,nomRegime:"herbivore"},
      {idRegime:2,nomRegime:"carnivore"}
    ]

    /*this.anims=[
    {idAnimal:1,nomAnimal:"roza",prixAnimal:260.0,dateNaissance:new Date("02/02/2020"),regime:{idRegime:1,nomRegime:"herbivore"}},
    {idAnimal:2,nomAnimal:"nono",prixAnimal:260.0,dateNaissance:new Date("02/02/2020"),regime:{idRegime:2,nomRegime:"carnivore"}},
    {idAnimal:3,nomAnimal:"mimi",prixAnimal:260.0,dateNaissance:new Date("02/02/2020"),regime:{idRegime:1,nomRegime:"herbivore"}}  ] 
  */
  }


  listeAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiURL+"/all");
  }

  ajouterAnimal(anim: Animal): Observable<Animal> {
    let jwt = this.authService.getToken();
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.post<Animal>(this.apiURL+"/addanim", anim,{headers:httpHeaders} );
  }



  supprimerAnimal(id: number) {
    const url = `${this.apiURL}/delanim/${id}`;
    let jwt = this.authService.getToken();
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.delete(url,{headers:httpHeaders});
  }

  consulterAnimal(id: number): Observable<Animal> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<Animal>(url,{headers:httpHeaders});
  }

  updateAnimal(animal: Animal): Observable<Animal> {
    let jwt = this.authService.getToken();
    console.log(jwt)
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Animal>(this.apiURL+"/updateanim", animal, {headers:httpHeaders});
  }


  listeRegimes(): Observable<Regime[]> {
    let jwt = this.authService.getToken();
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Regime[]>(this.apiURL + "/reg",{headers:httpHeaders});
  }

  consulterRegime(id: number): Regime {
    return this.regimes.find(reg => reg.idRegime == id)!;
  }

  rechercherParRegimee(idReg: number): Observable<Animal[]> {
    const url = `${this.apiURL}/animsreg/${idReg}`;
    let jwt = this.authService.getToken();
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Animal[]>(url,{headers:httpHeaders});
  }

  rechercherParNom(nom: string):Observable< Animal[]> {
    const url = `${this.apiURL}/animsByName/${nom}`;
    return this.http.get<Animal[]>(url);
  }

  ajouterRegime( reg: Regime):Observable<Regime>{
    let jwt = this.authService.getToken();
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Regime>(this.apiURLReg+'/addreg',reg,{headers:httpHeaders});
    }


    uploadImage(file: File, filename: string): Observable<Image>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${this.apiURL + '/image/upload'}`;
      return this.http.post<Image>(url, imageFormData);
      }
      
      loadImage(id: number): Observable<Image> {
      const url = `${this.apiURL + '/image/get/info'}/${id}`;
      return this.http.get<Image>(url);
      }

      uploadImageAnim(file: File, filename: string, idAnim:number): Observable<any>{
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.apiURL + '/image/uploadImageAnim'}/${idAnim}`;
        return this.http.post(url, imageFormData);
        }

        supprimerImage(id : number) {
          const url = `${this.apiURL}/image/delete/${id}`;
          return this.http.delete(url, httpOptions);
          }
    

}
