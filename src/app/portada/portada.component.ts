import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent {
  banner: string = '../../assets/img/banner.png';
  profile: string = '../../assets/img/perfil.gif';

  

  updateBanner(event: any) {
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
    };
    reader.readAsDataURL(file);
  }
}
