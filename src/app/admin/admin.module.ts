import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';


//import { AdminComponent } from './admin.component';
//import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { AjoutEmployeModule } from './ajout-employe/ajout-employe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    //AdminComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AjoutEmployeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  //exports: [AdminComponent]
})
export class AdminModule { }
