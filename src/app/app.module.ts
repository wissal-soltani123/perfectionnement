
//import { ResponsableeComponent } from './src/app/responsablee/responsablee.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { EmployeComponent } from './employe/employe.component';
import { CongeComponent } from './conge/conge.component';
import { AdminComponent } from './admin/admin.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DataService } from '../service/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { DemandeCongeModule } from './demande-conge/demande-conge.module';
import { EditProfileModule } from './employe/edit-profile/edit-profile.module';
import { ValiderCongeComponent } from './responsable/valider-conge/valider-conge.component';
import { AjoutEmployeModule } from './admin/ajout-employe/ajout-employe.module';
//import { ConsulterCongeComponent } from './src/app/responsable/consulter-conge/consulter-conge.component';
import { ResponsableModule } from './responsable/responsable.module';
import { EditProfileComponent } from './employe/edit-profile/edit-profile.component';
//import { DemandeCongeComponent } from './demande-conge/demande-conge.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    CongeComponent,
    AdminComponent,
    ResponsableComponent,
    ConnexionComponent,
    ValiderCongeComponent,
    //ConsulterCongeComponent,
    //esponsableeComponent,
    //DemandeCongeComponent,
    //EditProfileComponent,
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DemandeCongeModule,
    ReactiveFormsModule,
    BrowserModule,  
    EditProfileModule,
    AjoutEmployeModule,
    ResponsableModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  //bootstrap: [ConnexionComponent]
})
export class AppModule { }

