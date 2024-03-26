import { Component, OnInit ,TemplateRef, inject} from '@angular/core';
import { AdminService } from 'src/service/admin.service';
import { Iemploye } from 'src/models/iemploye';
//import { AdminService } from 'src/service/admin.service';}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  employes: Iemploye[]=[];

  constructor(private adminService : AdminService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  

  private loadEmployees() {
    this.adminService.getEmployees().subscribe(
      employes => this.employes = employes,
      error => console.error('Error loading employees', error)
    );
  }

  

  }
