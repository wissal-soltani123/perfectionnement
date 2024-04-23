import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Iresponsable } from 'src/models/iresponsable';
import { Iadmin } from 'src/models/iadmin';
import { Iemploye } from 'src/models/iemploye';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }
  user?:Iemploye
  role?:string;
  accessToken?:string;
  connected:boolean = false;

  authenticateUser(email: string, password: string): Observable<boolean|string> {
    const loginData = { email, password };

    return this.http.post<any>(`${this.baseUrl}/login`, loginData, this.getOptions()).pipe(
      
      map( (response) => 
      { this.user=response.user
       
        if([ "admin" , "employe" , "responsable" ].includes(response.user.role)){
          sessionStorage.setItem("user",JSON.stringify(response.user))
          sessionStorage.setItem("accessToken",response.accessToken)
          this.connected = true;
          return response.user.role
        }
      return false}),
      catchError(error => {
        console.error('Error during authentication:', error);
        return of(false);
      })
    );
  }

  private getOptions(): { headers: HttpHeaders } {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` });
    return { headers };
  }

  controle(){
    if(sessionStorage.getItem('accessToken') && sessionStorage.getItem('user') ){
      // console.log(JSON.parse(sessionStorage.getItem("user")!) as Iemploye)
      this.user = JSON.parse(sessionStorage.getItem("user")!) as Iemploye;
      this.accessToken = sessionStorage.getItem("accessToken")!;
      this.role = this.user!.role;
      this.connected = true;
      return true;
    }
    else{
      this.connected = false;
      return false
    }
  }



  deconnexion(){
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('user')
    this.user=undefined
    this.accessToken=undefined
    this.role = undefined
    this.connected = false
  }
  

  
}