import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CongeService {

  private conges: any[] = [
    { idConge: 1, soldeInitial: 20, soldeDisponible: 15, matricule: '12345' },
    { idConge: 2, soldeInitial: 18, soldeDisponible: 10, matricule: '54321' },
    { idConge: 3, soldeInitial: 25, soldeDisponible: 20, matricule: '67890' },
    { idConge: 4, soldeInitial: 15, soldeDisponible: 12, matricule: '09876' },
    { idConge: 5, soldeInitial: 30, soldeDisponible: 25, matricule: '13579' }
  ];

  constructor() {}

  getConges(): any[] {
    return this.conges;
  }
  getSoldeInitial(matricule: string): number | undefined {
    const conge = this.findCongeByMatricule(matricule);
    return conge ? conge.soldeInitial : undefined;
  }

  getSoldeDisponible(matricule: string): number | undefined {
    const conge = this.findCongeByMatricule(matricule);
    return conge ? conge.soldeDisponible : undefined;
  }

  private findCongeByMatricule(matricule: string): any | undefined {
    return this.conges.find((conge) => conge.matricule === matricule);
  }

  // Vous pouvez ajouter d'autres méthodes pour obtenir ou mettre à jour d'autres attributs
}