import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  texto: string = '¡Añade tu experiencia!';
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
    const textarea = document.getElementById('myTextarea') as HTMLTextAreaElement;
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', function() {
  const maxLength = parseInt(textarea.getAttribute('maxlength')!);
  const currentLength = textarea.value.length;
  const remainingLength = maxLength - currentLength;

  charCount!.textContent = `Caracteres restantes: ${remainingLength}`;

  if (currentLength > maxLength) {
    textarea.value = textarea.value.substring(0, maxLength); // Limitar el texto al máximo permitido
  }
});
  }
  
}
