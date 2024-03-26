import { Component , OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
   /* this.dataService.getBaseData().subscribe(
      (response) => {
        this.data = response;
        console.log('Data loaded:', this.data);
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );*/
  }
}
