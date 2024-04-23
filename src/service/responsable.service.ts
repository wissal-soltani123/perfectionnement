import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idemande } from 'src/models/idemande';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  private readonly baseUrl = 'http://localhost:3000';
  constructor( private http: HttpClient) { }

  getDemendes() : Observable < Idemande []> {
    return this.http.get<any> (`${this.baseUrl}/demande`)
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
