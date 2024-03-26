
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iemploye } from 'src/models/iemploye';
import { EmployeService } from 'src/service/employe.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers:[EmployeService]
})
export class EditProfileComponent implements OnInit{
  editProfileForm!: FormGroup;
  userData: Iemploye |null=null; 
  id?:number;

  constructor(private formBuilder: FormBuilder , private employeService : EmployeService) {}

  ngOnInit() :void{
    if(sessionStorage.getItem('accessToken')&&sessionStorage.getItem('user')){
      const userData=JSON.parse(sessionStorage.getItem('user')!)as Iemploye;
      this.id=userData.id;
      this.getUserData(this.id);
      }}
      
  getUserData(id:number| undefined):void {
    if(id){
    this.employeService.getUserData(id).subscribe(
      (userData) => {
        this.userData = userData;
        this.initializeForm();
      },
      (error) => {
        console.error('Error loading user data:', error);
      }
    );
  }}

  initializeForm() :void{
    if (this.userData){
    this.editProfileForm = this.formBuilder.group({
      nom: [this.userData.nom || '', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      pnom: [this.userData.pnom || '', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: [this.userData.email || '', [Validators.required, Validators.email]],
      gsm: [this.userData.gsm || '', [Validators.required, Validators.pattern(/^\d{8}$/)]]
    });
  }}
  onSubmit(): void {
    if (this.editProfileForm.valid && this.userData) {
      
      if (typeof this.userData.id === 'number') {
        const userId = this.userData.id.toString(); 
        this.employeService.updateUserData(userId, this.editProfileForm.value).subscribe(
          () => {
            console.log('User data updated successfully!');
            this.userData = { ...this.userData, ...this.editProfileForm.value };
          },
          (error) => {
            console.error('Error updating user data:', error);
          }
        );
      } else {
        console.error('User ID not found or invalid.');
      }
    } else {
      console.error('Invalid form submission. Please check the fields.');
    }
  }
  
  
}