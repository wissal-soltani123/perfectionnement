import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private employees: any[] = [
    {  matricule : 100 ,password : "pass0",nomEmp : "soltani" ,pnomEmp:"wissal", emailEmp : "wissal@topnet.tn" }, 
    {  matricule : 101 ,password : "pass1",nomEmp : "mejri" ,pnomEmp:"mohamed", emailEmp : "mohamed@topnet.tn"},
    {  matricule : 102 ,password : "pass2",nomEmp : "bidaa" ,pnomEmp:"taha", emailEmp : "taha@topnet.tn"},
    {  matricule : 103 ,password : "pass3",nomEmp : "soltani" ,pnomEmp:"bilel", emailEmp : "bilel@topnet.tn"}
    ]

    getUserData(id:number) {
      return this.http.get<any>(`${this.baseUrl}/users/${id}`);
    }

    updateUserData(id: string, userData: any): Observable<any> {
      const apiUrl = `${this.baseUrl}/users/${id}`; 
    return this.http.put<any>(apiUrl, userData); 
    }

    addEmployee( employeData: any): Observable<any> {
      const url = `${this.baseUrl}/users`; 
      return this.http.post(url, employeData);
    }

    

}
