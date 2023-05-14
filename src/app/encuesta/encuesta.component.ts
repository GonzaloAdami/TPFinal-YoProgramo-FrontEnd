import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  @Input() pregunta: string = "pregunta";
  @Input() respuestaAfirmativa: string = "correcto";
  @Input() respuestaNegativa: string = "incorrecto";
  @Input() RespuestaA: string = "RespuestaA";
  @Input() RespuestaB: string = "RespuestaB";
  porcentaje: number = 0;
  @Input() descripcion: string = '';
  @Input() opciones: string = '';
  afirmativo: number = 0;
  @Input() value: number = 0;
  @Input() title?: string; 
  @Output() porcentajeValue = new EventEmitter<number>();


  constructor (){
    this.pregunta = "¿Estás familiarizado/a con ?";
    this.respuestaAfirmativa = "Si, conozco esas etiquetas";
    this.respuestaNegativa = "No las conozco";
    this.RespuestaA = "RespuestaA2";
    this.RespuestaB = "RespuestaB2";
    this.porcentaje = 0;
    this.descripcion = '';
    this.opciones = '<div> <p> <h1> <img> <a>';
    this.afirmativo = 0;
    this.value = 0;

  }
  ngOnInit(): void { 
    const yesButton = document.getElementById("RespuestaA");
    const NoButton = document.getElementById("RespuestaB");
    const myInput = document.getElementById('myInput');  
    
    let resultadoSkills = 0;
    let afirmativo = 0;
    let negativo = 0;
    let encuesta = 0;
    let porcentaje = 0;
    
  
    if (yesButton && encuesta >= 5) {
      yesButton?.addEventListener('click', () => {
        alert("Ya no hay más tests");
      });
    } else if (NoButton && encuesta >= 5) {
      NoButton?.addEventListener('click', () => {
        alert("Ya no hay más tests");
      });
    }
    
  
    if (yesButton) {
      yesButton.addEventListener('click', () => {
        encuesta = encuesta + 1;
        afirmativo = afirmativo + 25;
        resultadoSkills = resultadoSkills + 118;  
    
        console.log(encuesta);
        console.log(afirmativo);
      if (encuesta === 1) {
      this.pregunta = "¿Has utilizado elementos semánticos en HTML5, como?";
      this.respuestaAfirmativa = "Si las he usado";
      this.respuestaNegativa = "No las he usado";
      this.porcentaje = 25;
      ;
    
      this.opciones = '<header> <nav> <section> <footer>';
    } else if (encuesta === 2) {
      this.pregunta = "¿Puedes crear un formulario HTML5 básico utilizando?";
      this.respuestaAfirmativa = "Si, se como hacerlo";
      this.respuestaNegativa = "No, no se como hacerlo";
      this.porcentaje = 50;   
      this.opciones = '<form>, <input>, <select>, <textarea>';
    } else if (encuesta === 3) {
      this.pregunta = "¿Estás familiarizado/a con conceptos más avanzados de HTML5, como?";
      this.respuestaAfirmativa = "Se utilizarlas";
      this.respuestaNegativa = "No se como utilizarlas";
      this.porcentaje = 75;
    
      this.opciones = '<video> <audio> <geolocation> localStorage';
    }else if (encuesta === 4) {
      afirmativo - 118;
      this.value = resultadoSkills;
      this.pregunta = "";
      this.respuestaAfirmativa = "Compartir";
      this.respuestaNegativa = "No compartir resultado";
      this.porcentaje = 100;
      this.value = resultadoSkills;
          
      this.opciones = '¡Felicidades!, completaste la encuesta, tu resultado es : ' + afirmativo + '%';
    }
      
      });
    }
    
        
          
      
    if (NoButton) {
      NoButton.addEventListener('click', () => {
        encuesta = encuesta + 1;
        
    
            
      console.log(encuesta);
      console.log(afirmativo);
      if (encuesta === 1) {
      this.pregunta = "¿Has utilizado elementos semánticos en HTML5, como?";
      this.respuestaAfirmativa = "Si las he usado";
      this.respuestaNegativa = "No las he usado";
      this.porcentaje = 25;
      this.opciones = '<header> <nav> <section> <footer>';
    } else if (encuesta === 2) {
      this.pregunta = "¿Puedes crear un formulario HTML5 básico utilizando?";
      this.respuestaAfirmativa = "Si, se como hacerlo";
      this.respuestaNegativa = "No, no se como hacerlo";
      this.porcentaje = 50;
      this.opciones = '<form>, <input>, <select>, <textarea>';
    } else if (encuesta === 3) {
      this.pregunta = "¿Estás familiarizado/a con conceptos más avanzados de HTML5, como?";
      this.respuestaAfirmativa = "Se utilizarlas";
      this.respuestaNegativa = "No se como utilizarlas";
      this.porcentaje = 75;
      this.opciones = '<video> <audio> <geolocation> localStorage';
    }else if (encuesta === 4) {
      afirmativo - 118;
      this.pregunta = "";
      this.respuestaAfirmativa = "Compartir";
      this.respuestaNegativa = "No compartir resultado";
      this.porcentaje = 100;   
      this.opciones = '¡Felicidades!, completaste la encuesta, tu resultado es : ' + afirmativo + '%';
    }else if (NoButton) {
      NoButton.addEventListener('click', () => {
        this.value = afirmativo * 0;
        
        
        });
      }
  });}
}


mostrar_en_consola(){
this.porcentajeValue.emit(this.porcentaje);
}
};