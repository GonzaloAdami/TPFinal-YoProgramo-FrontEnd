import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  usuariodatos from '../../assets/json/datos.json';






@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})


export class PortadaComponent {
@Output() banner: string = '../../assets/img/banner.png';
@Output() profile: string = '../../assets/img/perfil.gif';
@Output() UpdateProfile =  new EventEmitter<string>();
@Input() nombre: String = 'Usuario';
usuario: any = usuariodatos;

// Ejemplo de cómo emitir los datos al componente padre

  constructor(private http: HttpClient) {
    this.usuario = usuariodatos;
  }
  sendProfile() {
    // Emitir el evento con un valor
   
  }
  updateBanner(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e: any) => {
      const imageBanner = e.target.result;
      // Aquí puedes realizar las acciones necesarias con la imagen cargada,
      this.banner = imageBanner;	
    };
    reader.readAsDataURL(file);

    
  }

  updateProfile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e: any) => {
      const imageProfile = e.target.result;
      // Aquí puedes realizar las acciones necesarias con la imagen cargada,
      this.profile = imageProfile;	
      this.UpdateProfile.emit( this.profile);
    };
    reader.readAsDataURL(file);
    


    
      
      
    }
  }


function SetProfile() {
  throw new Error('Function not implemented.');
}



     
   