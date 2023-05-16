import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  texto: string = 'Aqui puedes añadir tus experiencias';
  profile: string = '../../assets/img/perfil.gif';
  nombre: string = 'Usuario';
  comentario: String ="¡Bienvenido a tu portafolio usuario disfruta de tu experiencia!";
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
