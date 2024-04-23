import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idemande } from 'src/models/idemande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  static getdemande() {
    throw new Error('Method not implemented.');
  }
  private readonly baseUrl ='http://localhost:3000'

  constructor(private http: HttpClient) { }
  
  getdemande(): Observable<Idemande[]>{
    return this.http.get<Idemande[]>(`${this.baseUrl}/demande`);
    
  }
  validerDemande(demande: Idemande): Observable<any> {
    const  updatedDemande: Idemande = { ...demande, statut: 'validé' };
    return this.http.put<any>(`${this.baseUrl}/demande/${demande.id}`, updatedDemande);
  }

  annulerDemande(demande: Idemande): Observable<any> {
    const updatedDemande: Idemande = { ...demande, statut: 'refusé' };
    return this.http.put<any>(`${this.baseUrl}/demande/${demande.id}`, updatedDemande);
  }
}

