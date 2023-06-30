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
    private ruta: Router,
    private autenticacionService: AutenticacionService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          deviceId:["17867868768"],
          deviceType:["DEVICE_TYPE_ANDROID"],
          notificationToken:["67657575eececc34"]
        })
    })


  }

  ngOnInit(): void {

  }
  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
  
    // Realiza una petición HTTP al servidor para validar las credenciales
    this.http.post<any>(`${this.apiUrl}/login`, body).subscribe(
      (response) => {
        // Manejar el resultado de la consulta aquí
        console.log("Function login: Status OK, Correo parametro: " + email + " Contraseña: " + password);
        console.log("Token: " + response.body);
        var token = response.body;
        if (token != null) {
          localStorage.setItem('token', token); 
          this.ruta.navigate(['/portafolio']);
          console.log("sesion iniciada");
        }
      },
      (error) => {
        // Manejar los errores de la petición aquí
        console.error(error);
      }
    );
  }

  isPasswordInvalid(): boolean {
    const passwordControl = this.form.get('password');
    return passwordControl?.invalid ?? false;
  }

  
    get password() {
      return this.form.get('password');
      console.log("get password");
    }
    get email() {
      return this.form.get('email');
      console.log("get email");
    }
  }


