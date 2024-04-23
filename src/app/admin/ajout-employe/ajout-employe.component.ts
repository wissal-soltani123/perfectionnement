import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from 'src/service/employe.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})
export class AjoutEmployeComponent implements OnInit {
  public ajoutEmployeForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private employeService: EmployeService ,private router : Router , private http:HttpClient) {}

  ngOnInit() {
    
    this.ajoutEmployeForm = this.formBuilder.group({
      matricule: [''],
      nom: [''],
      pnom: [''],
      email: ['', Validators.required],  
      password: ['', Validators.required],  
      gsm: [''],
      role: ['']
    });

  }
  
   onsubmit() {
       
    this.employeService.addEmployee(this.ajoutEmployeForm.value).subscribe(
      () => {
        alert("User added successfully")
        this.ajoutEmployeForm.reset();
        this.router.navigate(['/adminhome']);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
        
        
  

}}
