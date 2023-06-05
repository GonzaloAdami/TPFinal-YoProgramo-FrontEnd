import { style } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  texto: string = '¡Añade tu experiencia!';
  nombre: string = 'Usuario';
  @Input() profileExperiencia: string = "";
  @Output() comentario: String ="¡Bienvenido a tu portafolio usuario disfruta de tu experiencia!";
  
constructor(){

}
  NgOnInit(): void {

  }
 voidProfile():void{

 }
  addElement() {
  
    // Crear el elemento <div> con una clase específica
    let contenedorExperiencia = document.createElement('div');
    contenedorExperiencia.style.display = "flex";
    contenedorExperiencia.style.marginBottom = "1rem";
    // Agregar la clase 'imgLogo' al <div>
  
    // Crear el elemento <img> y asignar la imagen de perfil
 
   
   
    let etiquetaExperiencia = document.createElement('button');
    etiquetaExperiencia.style.display = "flex";
    etiquetaExperiencia.style.backgroundColor= "#1274bb";
    etiquetaExperiencia.style.color = "#ffffff";
    contenedorExperiencia.style.maxWidth = 'auto';
    etiquetaExperiencia.textContent = this.texto.toString();
    etiquetaExperiencia.style.borderRadius = "20px 20px 20px 0px";
    etiquetaExperiencia.style.height = "3vw"; // Agregar texto al interior del botón
    etiquetaExperiencia.style.border = "none";
    etiquetaExperiencia.style.textAlign = "center";
    etiquetaExperiencia.style.marginBottom = "2rem";
    etiquetaExperiencia.style.padding = "0.5vw";
    let fotoPerfil = document.createElement('img');
    fotoPerfil.src = this.profileExperiencia;
    fotoPerfil.style.width = "5vw";
    fotoPerfil.style.height = "5vw";
    fotoPerfil.style.borderRadius = "50%";
    fotoPerfil.style.display = "flex";
    fotoPerfil.style.marginRight = "0.5vw";
    
    contenedorExperiencia.appendChild(fotoPerfil);
    contenedorExperiencia.appendChild(etiquetaExperiencia);
    // Asignar la ruta de la imagen de perfil a 'this.profile'
    
    // Agregar el elemento <img> al elemento <div>
   
  
    // Agregar el elemento <div> al documento HTML
    document.body.appendChild(contenedorExperiencia);
  
    // Verificar si existe un elemento con el id "experiencia" antes de agregarlo
    let experiencia = document.getElementById("experiencia");
    if (experiencia) {
      experiencia.appendChild(contenedorExperiencia);
    }else{
      console.log("No existe");
    }
  }
  
  
  
  
  
  
  
     
      
      

  updateProfile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();  


    
    reader.onload = (e: any) => {
      const imageProfile = e.target.result;
      // Aquí puedes realizar las acciones necesarias con la imagen cargada,
      this.profileExperiencia = imageProfile;
      
    
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
  


  
  // Ejemplo de uso



}

