import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private router: Router, private dataService: DataService , private formBuilder: FormBuilder) {
    // Initialize loginForm in the constructor or ngOnInit
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }
   ngOnInit() {
    // Any additional initialization logic can go here
    console.log('Le composant ConnexionComponent est initialisé.');
  }
  
  
  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // Appel à votre service pour vérifier l'authentification
      this.dataService.authenticateUser(email, password).subscribe(
        (cnx) => {
            if (cnx == false) {
              alert("email ou password est incorrect")

            }else 

              if(cnx=="admin"){
                this.router.navigate(['/adminhome']);
              }else if (cnx === 'employe') 
                this.router.navigate(['/employehome']);
                else if (cnx == 'responsable') {
                  this.router.navigate(['/responsablehome']);}
          /*if (role === 'admin') {
            this.router.navigate(['/adminhome']);
          } else if (role === 'employe') {
            this.router.navigate(['/employehome']);
          } else if (role === 'responsable') {
            this.router.navigate(['/responsablehome']);
          } else {
            console.error('Unknown role:', role);
          }*/
        },
        (error) => {
          // Gérez les erreurs d'authentification
          console.error('Erreur d\'authentification', error);
        }
      );
    } else {
      // Handle invalid form submission (both fields are required)
      //console.error('Please fill in both matricule and password fields.');
      alert('Veuillez remplir les deux champs.');
    }
  }}


