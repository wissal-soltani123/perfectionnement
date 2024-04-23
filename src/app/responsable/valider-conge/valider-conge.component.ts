import { Component } from '@angular/core';
import { Idemande } from 'src/models/idemande';

import { DemandeService } from 'src/service/demande.service';
import { ResponsableService } from 'src/service/responsable.service';

@Component({
  selector: 'app-valider-conge',
  templateUrl: './valider-conge.component.html',
  styleUrls: ['./valider-conge.component.css']
})
export class ValiderCongeComponent {
  demandes: Idemande[]=[];
  filtredDemandes:Idemande[]=[];

  constructor(private responsableService : ResponsableService) {}


  ngOnInit() {
    this.loadDemandes();
    
  }

   valider(demande: Idemande) :void{
    demande.statut = 'validé';
  this.responsableService.validerDemande(demande).subscribe(() => {
      
       this.loadDemandes();
     });
  }
  
   annuler(demande: Idemande) {
    demande.statut = 'refusé';
     this.responsableService.annulerDemande(demande).subscribe(() => {
     
     this.loadDemandes();
    });
  }

  loadDemandes () {
   this.responsableService.getDemendes().subscribe(
      (demandes:any) => {this.demandes = demandes;
        this.filtredDemandes = this.demandes;
      },
      
    (error) => console.error('Error loading employees', error)
    );
 }
 filterDemandes(statut: string): void {
  this.filtredDemandes = this.demandes.filter(demande => demande.statut === statut);
}
}
