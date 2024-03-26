import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { forkJoin, Observable } from 'rxjs';
import { Iconge } from 'src/models/iconge';
import { Iemploye } from 'src/models/iemploye';


@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private http : HttpClient) { }
  private url: string = 'http://localhost:3000/';
  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}

  conge : Iconge[] = [];

  employe : Iemploye[] = [];

  getDataConge() : Observable<Iconge[]>{
    
    return this.http.get<Iconge[]>(this.url+"conge", this.options) 
      .pipe(
        tap(data => {
          this.conge = data;
        }),
        catchError(error => {
          console.error('Error fetching formations:', error);
          this.conge = [];
          return [];
        })
      ) ;
  }

  getDataCongeByEmail(email : string) : Observable<Iconge[]>{
    
    return this.http.get<Iconge[]>(this.url+"conge?email="+email, this.options) 
      .pipe(
        tap(data => {
          this.conge = data;
        }),
        catchError(error => {
          console.error('Error fetching formations:', error);
          this.conge = [];
          return [];
        })
      ) ;
  }

  getDataEmploye() : Observable<Iemploye[]> {
    
    return this.http.get<Iemploye[]>(this.url+"employe", this.options) 
      .pipe(
        tap(data => {
          this.employe = data;
        }),
        catchError(error => {
          console.error('Error fetching formations:', error);
          this.employe = [];
          return [];
        })
      ) ;
  }

  fetchData(): Observable<[Iconge[], Iemploye[]]> {
    return forkJoin([this.getDataConge(), this.getDataEmploye()]);
  }




}
