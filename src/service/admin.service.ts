import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iemploye } from 'src/models/iemploye';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly baseUrl ='http://localhost:3000';

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Iemploye[]> {
    return this.http.get<Iemploye[]>(`${this.baseUrl}/users`);
  }

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, employeeData);
  }
}
    

