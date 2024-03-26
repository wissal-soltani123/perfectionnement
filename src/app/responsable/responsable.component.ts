import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { Iconge } from 'src/models/iconge';
import { Iemploye } from 'src/models/iemploye';
import { DataService } from 'src/service/data.service';
import { RelationService } from 'src/service/relation.service';

@Component({
  selector: 'app-conge',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent {


  congeData: Iconge[] = [];
  employeData?: Iemploye;

  constructor(private relationService: RelationService , private conn : DataService,private router : Router) { }

  ngOnInit(): void {

    if(this.conn.controle()){

      this.employeData = this.conn.user;
      this.relationService.getDataCongeByEmail( this.employeData!.email ).subscribe(
        (conge) => {
          // console.log("step1")
          this.congeData = conge
          this.design()
        },
        error => {
          console.error('Error fetching data:', error);
        }
      )

    }
    else{
      this.router.navigate([ "connexion" ])
    }

  }

  design(){
    
    const ref = document.getElementById("pieChart") as HTMLCanvasElement

    

    let soldeInitiale =0;
    let SoldeDispo = 0;

    for(let c of this.congeData){
      soldeInitiale += c.soldeInitiale
      SoldeDispo += c.soldedispo
    }

    // console.log(soldeInitiale+ " / "+SoldeDispo )
    // console.log("step2")
  
  
  new Chart(ref, {
        type: 'pie',      
        data: {
          
          labels: [
            'solde disponible',
            'solde intiale',
            
          ],
          datasets: [{
            label: 'Congé',
            data: [SoldeDispo, soldeInitiale],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)'
              
            ],
            hoverOffset: 4
          }]
        }})}


}
