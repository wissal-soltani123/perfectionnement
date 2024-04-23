
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iemploye } from 'src/models/iemploye';
import { Router } from '@angular/router';
import { EmployeService } from 'src/service/employe.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers:[EmployeService]
})
export class EditProfileComponent implements OnInit{
  public editProfileForm!: FormGroup;
   userData!:Iemploye;
  
  constructor(private formBuilder: FormBuilder , private employeService : EmployeService , private router: Router ) {
  this.editProfileForm = this.formBuilder.group({
      nom: [ '', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      pnom: [ '', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      gsm: [  '', [Validators.required, Validators.pattern(/^\d{8}$/)]]

 });}
   ngOnInit() :void{
    if(sessionStorage.getItem('accessToken')&&sessionStorage.getItem('user')){
      this.userData=JSON.parse(sessionStorage.getItem('user')!)as Iemploye;
      this.editProfileForm.patchValue({
        nom:this.userData.nom,
        pnom:this.userData.pnom,
        email:this.userData.email,
        gsm:this.userData.gsm
      });}}
      
onSubmit(): void{
if(this.editProfileForm.valid){
  this.employeService.updateUserData(this.userData.id,this.editProfileForm.value).subscribe(
    ()=> {
      console.log('user updated successfully!');
      alert('User data updated successfully!');
      sessionStorage.setItem('user',JSON.stringify(this.editProfileForm.value));
      this.router.navigate(['/employehome']);

    },
    (error)=> {
      console.error('error updating user data',error);
      alert('Error updating user data. Please try again later.');

    }

    );
}
  }}
  
  
