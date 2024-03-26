import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { ConnexionComponent } from './connexion/connexion.component';
import { EmployeRoutingModule } from './employe-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
//import { ConsulterCongeComponent } from './consulter-conge/consulter-conge.component';


@NgModule({
  declarations: [
    //EditProfileComponent,
    //ConsulterCongeComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule
  ]
})
export class EmployeModule { }
