import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutEmployeComponent } from './ajout-employe.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AjoutEmployeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  //exports: [AjoutEmployeComponent],
})
export class AjoutEmployeModule { }
