import { Component } from '@angular/core';
import { Idemande } from 'src/models/idemande';

import { DemandeService } from 'src/service/demande.service';

@Component({
  selector: 'app-valider-conge',
  templateUrl: './valider-conge.component.html',
  styleUrls: ['./valider-conge.component.css']
})
export class ValiderCongeComponent {
  demandes: Idemande[]=[];

  constructor(private demandeService : DemandeService) {}


  ngOnInit() {
    this.loadDemandes();
    
  }

  valider(demande: Idemande) {
    this.demandeService.validerDemande(demande).subscribe(() => {
      // Mise à jour réussie, vous pouvez rafraîchir la liste des demandes ou effectuer d'autres actions nécessaires.
      this.loadDemandes();
    });
  }
  
  annuler(demande: Idemande) {
    this.demandeService.annulerDemande(demande).subscribe(() => {
      // Mise à jour réussie, vous pouvez rafraîchir la liste des demandes ou effectuer d'autres actions nécessaires.
      this.loadDemandes();
    });
  }

  loadDemandes () {
    this.demandeService.getdemande().subscribe(
      (demandes:any) => {this.demandes = demandes},
      (error) => console.error('Error loading employees', error)
    );
  }
}
