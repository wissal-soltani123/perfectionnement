import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
//import { EmployeComponent } from './employe/employe.component';
//import { ResponsableComponent } from './responsable/responsable.component';
import { CongeComponent } from './conge/conge.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { EditProfileComponent } from './employe/edit-profile/edit-profile.component';
import { AjoutEmployeComponent } from './admin/ajout-employe/ajout-employe.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { EditProfileModule } from './responsable/edit-profile/edit-profile.module';
import { ValiderCongeComponent } from './responsable/valider-conge/valider-conge.component';
//import { EditProfileModule } from './responsable/edit-profile/edit-profile.module';
//import { ResponsableeComponent } from './responsablee/responsablee.component';
//import { ConsulterCongeComponent } from './src/app/responsable/consulter-conge/consulter-conge.component';

const routes: Routes = [
{path: '', redirectTo: '/connexion', pathMatch: 'full' },
{path:'adminhome', component:AdminComponent},
{path:'demanderconge', component:DemandeCongeComponent},
// {path:'employehome', component:EmployeComponent},
{path:'employehome', component:CongeComponent},
{path:'connexion',component:ConnexionComponent},
{path:'responsablehome',component:ResponsableComponent},
{path:'consulterconge', component:CongeComponent},
{ path :'Validerconge',component:ValiderCongeComponent},
{path:'editprofile',component:EditProfileComponent},
{path:'ajoutEmploye',component:AjoutEmployeComponent},
//{path:'editprofil',component:EditProfileModule},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
