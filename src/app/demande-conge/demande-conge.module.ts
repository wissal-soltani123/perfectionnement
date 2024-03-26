import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DemandeCongeComponent } from './demande-conge.component';



@NgModule({
  declarations: [DemandeCongeComponent],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ]
})
export class DemandeCongeModule { }
