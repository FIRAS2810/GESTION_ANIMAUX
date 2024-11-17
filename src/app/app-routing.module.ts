import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimauxComponent } from './animaux/animaux.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { RechercheParRegimeComponent } from './recherche-par-regime/recherche-par-regime.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeRegimesComponent } from './liste-regimes/liste-regimes.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { animalGuard } from './animal.guard';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

const routes: Routes = [
{path:"animaux",component: AnimauxComponent},
{path:"add-animaux",component: AddAnimalComponent,canActivate:[animalGuard]},
{ path: "", redirectTo: "animaux", pathMatch: "full" },
{path: "updateAnimal/:id", component: UpdateAnimalComponent},
{path: "rechercheParRegime", component: RechercheParRegimeComponent},
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "listeRegimes", component :ListeRegimesComponent },
{path: 'app-forbidden', component: ForbiddenComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path:"verifEmail",component: VerifEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
