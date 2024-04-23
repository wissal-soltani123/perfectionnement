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
  
  ngAfterViewInit(){
    
    const ref = document.getElementById("pieChart") as HTMLCanvasElement
  
  
  new Chart(ref, {
        type: 'pie',      
        data: {
          
          labels: [
            'solde disponible',
            'solde intiale',
            
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)'
              
            ],
            hoverOffset: 4
          }]
        }})}


}
