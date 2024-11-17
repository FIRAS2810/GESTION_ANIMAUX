import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RechercheParRegimeComponent } from './recherche-par-regime/recherche-par-regime.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeRegimesComponent } from './liste-regimes/liste-regimes.component';
import { UpdateRegimeComponent } from './update-regime/update-regime.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptor } from './service/token.interceptor';
import { VerifEmailComponent } from './verif-email/verif-email.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimauxComponent,
    
    AddAnimalComponent,
          UpdateAnimalComponent,
          RechercheParRegimeComponent,
          RechercheParNomComponent,
          SearchFilterPipe,
          ListeRegimesComponent,
          UpdateRegimeComponent,
          LoginComponent,
          ForbiddenComponent,
          RegisterComponent,
          VerifEmailComponent,
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: 
    [{ provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
       
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
