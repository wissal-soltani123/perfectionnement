import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {

  constructor(private router: Router) { }

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
      }})}}


