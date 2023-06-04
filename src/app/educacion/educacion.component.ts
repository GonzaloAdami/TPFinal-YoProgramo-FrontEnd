import { style } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  texto: string = '¡Añade tu educacion!';
  showError: boolean = false;

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }

  mostrarError(): void {
    this.showError = true;
  }

  addElement() {
 
    let educacionContainer = document.getElementById("boxEducacion");
  
    let etiqueta = document.createElement('button');
    etiqueta.classList.add('btn-e');
    etiqueta.textContent = this.texto.toString();
    etiqueta.style.display= 'flex';
    etiqueta.style.justifyContent = 'center';
    etiqueta.style.alignItems = 'center'; 
    etiqueta.style.height= '3vw';
    etiqueta.style.position= 'relative';
    etiqueta.style.borderRadius= '40px 40px 40px 40px';
    etiqueta.style.backgroundColor= 'rgb(50, 70, 219)';
    etiqueta.style.color= 'aliceblue';
    etiqueta.style.border= 'none';
    etiqueta.style.opacity= '0.8';
    etiqueta.style.padding= '1vw';
    etiqueta.style.margin= '1vw';
    

    educacionContainer?.appendChild(etiqueta);
    if (educacionContainer !== null) {
      educacionContainer.appendChild(etiqueta);
    }

  }
  
  
}