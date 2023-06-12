import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  userName: string = "";
  apiUrl = "https://backend-0vro.onrender.com";
  @Output() user: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,  
    private router: Router
    ) { }
   
  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],  
      deviceInfo: this.formBuilder.group({
        deviceId: ["17867868768"],
        deviceType: ['DEVICE_TYPE_ANDROID'],
        notificationToken: ['67657575eececc34']
      })
    });
   
   
  }
  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    // Realiza una petición HTTP al servidor para validar las credenciales
    return this.http.post<any>(`${this.apiUrl}/login`, body);
    
  }
  isPasswordInvalid(): boolean {
    const passwordControl = this.form.get('password');
    return passwordControl?.invalid ?? false;
  }
  onEnviar() {
    if (this.form.valid) {
      const emailControl = this.form.get('email');
      const passwordControl = this.form.get('password');
  
      if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;
  
        this.login(email, password).subscribe(
          (response) => {
            // Verificar la respuesta del servidor y redirigir a la página correspondiente
            if (response.success) {
              this.router.navigate(['/portafolio']);
            } else {
             
              this.router.navigate(['/portafolio']);
            }
          },
          (error) => {
            console.log('Error al verificar el correo y contraseña:', error);
          }
        );
      }}
  }
}
