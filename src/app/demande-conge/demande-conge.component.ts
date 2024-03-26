import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css'],
  
})

export class DemandeCongeComponent {
  demandeCongeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.demandeCongeForm = this.formBuilder.group({
      typeConge: ['', Validators.required],
      dateDebut: ['', [Validators.required, this.validateWeekend]],
      dateFin: ['', [Validators.required, this.validateWeekend]]
    });
  }

  submitForm() {
    if (this.demandeCongeForm.valid) {
      // Envoyer la demande de congé à la base de données
      console.log('Demande de congé soumise :', this.demandeCongeForm.value);
      alert('Demande de congé soumise avec succès!');
    }else alert('Veuillez remplir tous les champs');
  }


  private validateWeekend(control: AbstractControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
      return { 'weekendInvalid': true };
    }
    return null;
  }
}


