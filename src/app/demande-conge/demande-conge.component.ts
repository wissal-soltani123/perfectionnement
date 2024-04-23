import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Idemande } from 'src/models/idemande';
import { Iemploye } from 'src/models/iemploye';
import { EmployeService } from 'src/service/employe.service';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css'],
  
})

export class DemandeCongeComponent implements OnInit {
  demandeCongeForm!: FormGroup;
  userData!: Iemploye;

  constructor(private formBuilder: FormBuilder , private employeService :EmployeService) {}

ngOnInit(): void {
  this.userData=JSON.parse(sessionStorage.getItem('user')!)as Iemploye;
  this.demandeCongeForm = this.formBuilder.group({
    email: [this.userData.email],
    typeConge: ['', Validators.required],
    dateDeb: ['', Validators.required],
    dateFin: ['', Validators.required]
  });
}
  submitForm() {
    if (this.demandeCongeForm.valid) {
      const demandeConge: Idemande= this.demandeCongeForm.value;
      demandeConge.statut = 'encours';
      this.employeService.addDemandeConge(demandeConge).subscribe(
        (response) => {
          console.log('Demande de congé soumise avec succès:', response);
          
          this.demandeCongeForm.reset();
        },
        (error) => {
          console.error('Erreur lors de la soumission de la demande de congé:', error);
        }
      );
    } else {
      console.error('Le formulaire de demande de congé est invalide. Veuillez vérifier les champs.');
    }  
  }

  // private validateWeekend(control: AbstractControl): { [key: string]: boolean } | null {
  //   const selectedDate = new Date(control.value);
  //   if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
  //     return { 'weekendInvalid': true };
  //   }
  //   return null;
  // }
}


