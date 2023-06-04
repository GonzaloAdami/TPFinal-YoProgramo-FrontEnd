import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  @Input() titulo:string = "Encuesta";
  @Input() subtitulo: string = "subtitulo";
  
  @Input() pregunta: string = "pregunta";
  @Input() pregunta1: string = "pregunta";
  @Input() pregunta2: string = "pregunta";
  @Input() pregunta3: string = "pregunta";
  @Input() pregunta4: string = "pregunta";

  @Input() opciones: string = '';
  @Input() opciones1: string = '';
  @Input() opciones2: string = '';
  @Input() opciones3: string = '';
  @Input() opciones4: string = '';

  @Input() respuestaAfirmativa: string = "correcto";
  @Input() respuestaNegativa: string = "incorrecto";

  @Input() RespuestaA: string = "RespuestaA";
  @Input() RespuestaB: string = "RespuestaB";

  @Input() descripcion: string = '';

  porcentaje: number = 0;
  afirmativo: number = 0;
  
  @Output() value: number = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  

  @Input() title?: string; 
  @Output() porcentajeValue = new EventEmitter<number>();


  constructor (){
    this.pregunta = "pregunta";
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
    
    let resultadoSkills = 0;
    let afirmativo = 0;
    let encuesta = 0;
    let porcentaje = 0;
    
    this.pregunta = this.pregunta1;
    this.opciones = this.opciones1;

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
        afirmativo = afirmativo + 25
        resultadoSkills = resultadoSkills + 118;  
    
        console.log(encuesta);
        console.log(afirmativo);
      if (encuesta === 1) {
      this.pregunta = this.pregunta2;
      this.opciones = this.opciones2;

      this.respuestaAfirmativa = "Si las he usado";
      this.respuestaNegativa = "No las he usado";
      this.porcentaje = 25;
      
    
    } else if (encuesta === 2) {
      this.pregunta = this.pregunta3;
      this.opciones = this.opciones3;

      this.respuestaAfirmativa = "Si, se como hacerlo";
      this.respuestaNegativa = "No, no se como hacerlo";
      this.porcentaje = 50;   
      

    } else if (encuesta === 3) {
      this.pregunta = this.pregunta4;
      this.opciones = this.opciones4;

      this.respuestaAfirmativa = "Se utilizarlas";
      this.respuestaNegativa = "No se como utilizarlas";
      this.porcentaje = 75;
      

    }else if (encuesta === 4) {
      afirmativo - 118;

      this.value = resultadoSkills;
      this.pregunta = "";
      this.opciones = '¡Felicidades!, completaste la encuesta, tu resultado es : ' + afirmativo + '%';

      this.respuestaAfirmativa = "Compartir";
      this.respuestaNegativa = "No compartir resultado";
      this.porcentaje = 100;
      this.value = resultadoSkills;
      
    }
      
      });
    }
    
        
          
      
    if (NoButton) {
      NoButton.addEventListener('click', () => {
        encuesta = encuesta + 1;
        
    
            
      console.log(encuesta);
      console.log(afirmativo);
      if (encuesta === 1) {
      this.pregunta = this.pregunta2;
      this.opciones = this.opciones2;

      this.respuestaAfirmativa = "Si las he usado";
      this.respuestaNegativa = "No las he usado";
      this.porcentaje = 25;
      
    } else if (encuesta === 2) {
      this.pregunta = this.pregunta3;
      this.opciones = this.opciones3;

      this.respuestaAfirmativa = "Si, se como hacerlo";
      this.respuestaNegativa = "No, no se como hacerlo";
      this.porcentaje = 50;
      
    } else if (encuesta === 3) {
      this.pregunta = this.pregunta4;
      this.opciones = this.opciones4;
      this.respuestaAfirmativa = "Se utilizarlas";
      this.respuestaNegativa = "No se como utilizarlas";
      this.porcentaje = 75;
      ;
    }else if (encuesta === 4) {
      afirmativo - 118;

      this.pregunta = "";
      this.opciones = '¡Felicidades!, completaste la encuesta, tu resultado es : ' + afirmativo + '%';

      this.respuestaAfirmativa = "Compartir";
      this.respuestaNegativa = "No compartir resultado";
      this.porcentaje = 100;   
      
    }else if (NoButton) {
      NoButton.addEventListener('click', () => {
        this.value = afirmativo * 0;
        
        
        });
      }
  });}
}



Data(){
  this.valueChange.emit(this.value);
}
}
