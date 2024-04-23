import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iemploye } from 'src/models/iemploye';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
    
  }

    getUserData(id:number) {
      return this.http.get<Iemploye>(`${this.baseUrl}/users/${id}`);
    }

    updateUserData(id: number | undefined , userData: Partial<Iemploye>): Observable<any> {
      const apiUrl = `${this.baseUrl}/users/${id}`; 
    return this.http.patch<any>(apiUrl, userData); 
    }

     addEmployee( employeData: any): Observable<any> {
      const url = `${this.baseUrl}/users`; 
       return this.http.post(url, employeData);
     }

     addDemandeConge(demandeConge : any): Observable<any> {
      const url = `${this.baseUrl}/demande`;
      return this.http.post(url,demandeConge);
     }
    

}
