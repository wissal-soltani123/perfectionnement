import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from 'src/service/employe.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editProfileForm!: FormGroup;
  isMatriculeDisabled = false;
  userData:any;

  constructor(private formBuilder: FormBuilder, private employeService: EmployeService) {}

  ngOnInit() :void {
    const id = sessionStorage.getItem('id');
    this.getUserData(id);
  }

  getUserData(id:any) {
    this.employeService.getUserData(id).subscribe(
      (userData) => {
        this.userData = userData;
        this.initializeForm();
      },
      (error) => {
        console.error('Error loading user data:', error);
      }
    );
  }
  initializeForm() {
    
    this.editProfileForm = this.formBuilder.group({
      nom: [this.userData.nom, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      pnom: [this.userData.prenom, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: [this.userData.email, [Validators.required, Validators.email]],
      gsm: [this.userData.gsm, [Validators.required, Validators.pattern(/^\d{8}$/)]]
    });
  }

  onSubmit() {
    if (this.editProfileForm.valid) {
      
      this.employeService.updateUserData(this.userData.id, this.editProfileForm.value).subscribe(
        () => {
          console.log('User data updated successfully!');
          
          this.userData = { ...this.userData, ...this.editProfileForm.value };
        },
        (error) => {
          console.error('Error updating user data:', error);
        }
      );
    } else {
      console.error('Invalid form submission. Please check the fields.');
    }
  }

  cancelEdit() {
    
  }
}