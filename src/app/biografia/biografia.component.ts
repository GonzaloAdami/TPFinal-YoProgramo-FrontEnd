import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent implements OnInit{
  ngOnInit(): void {
    function actualizarBiografia() {
      const biografiaValue: string = (document.getElementById("biografiaText") as HTMLInputElement).value;
      const contenedor: HTMLElement | null = document.getElementById("biografia");
      
      if (contenedor) {
        // Crear un nuevo elemento de párrafo
        const parrafo: HTMLParagraphElement = document.createElement("p");
      
        // Asignar el texto de la biografía al contenido del párrafo
        parrafo.textContent = biografiaValue;
      
        // Agregar el párrafo al contenedor de biografías
        contenedor.appendChild(parrafo);
      }
      
      // Limpiar el campo de texto
      (document.getElementById("biografiaText") as HTMLInputElement).value = "";
      
      alert("Biografía actualizada");
      
  }
  }
}
