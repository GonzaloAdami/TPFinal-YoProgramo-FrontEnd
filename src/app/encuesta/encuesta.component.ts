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
  
  @Input() pregunta: string = "";
  @Input() pregunta1: string = "";
  @Input() pregunta2: string = "";
  @Input() pregunta3: string = "";
  @Input() pregunta4: string = "";

  @Input() opciones: string = '';
  @Input() opciones1: string = '';
  @Input() opciones2: string = '';
  @Input() opciones3: string = '';
  @Input() opciones4: string = '';

  @Input() RespuestaA: string = "";
  @Input() RespuestaB: string = "";
  
           displayA: string = "";
           displayB: string = "";

  @Input() descripcion: string = '';

           porcentaje: number = 0;
           afirmativo: number = 0;
           state: string = '';

           Correct: string = 'Si';
           Incorrect: string = 'No';

  @Output() value: number = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  

  @Input() title?: string; 
  @Output() porcentajeValue = new EventEmitter<number>();


  constructor (){
    this.pregunta = "pregunta";

    this.RespuestaA = "RespuestaA2";
    this.RespuestaB = "RespuestaB2";

    this.porcentaje = 0;

    this.descripcion = '';
    this.opciones = '';

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
  
    if (yesButton) {
      yesButton.addEventListener('click', () => {
        encuesta = encuesta + 1;
        afirmativo = afirmativo + 25
        resultadoSkills = resultadoSkills + 118;  
    
      if (encuesta === 1) {
      this.pregunta = this.pregunta2;
      this.opciones = this.opciones2;
      this.porcentaje = 25;
      
    
    } else if (encuesta === 2) {
      this.pregunta = this.pregunta3;
      this.opciones = this.opciones3;
      this.porcentaje = 50;   
      

    } else if (encuesta === 3) {
      this.pregunta = this.pregunta4;
      this.opciones = this.opciones4;
      this.porcentaje = 75;
      

    }else if (encuesta === 4) {
      afirmativo - 118;
 
      this.pregunta = "";
      this.opciones = '¡Felicidades!, completaste la encuesta, tu resultado es : ' + afirmativo + '%';
      this.Correct = 'Compartir';
      this.Incorrect = 'Cancelar';
      this.porcentaje = 100;
      this.value = resultadoSkills;
   
      
    }else if (encuesta === 5){
      this.displayA = 'none';
      this.Incorrect = 'Reintentar';  
      this.value = afirmativo * 0 ;      
    }else if (encuesta === 6){
      encuesta = encuesta*0; 
      this.displayA = '';
      this.displayB = '';  

      this.pregunta = this.pregunta1;
      this.opciones = this.opciones1;

      this.Correct = 'Si';
      this.Incorrect = 'No';

      this.porcentaje = 0;
      afirmativo = 0;
      this.value = this.value * 0;
      console.log(afirmativo);
    }
      
      });
    }
    
        
          
      
    if (NoButton) {
      NoButton.addEventListener('click', () => {
        encuesta = encuesta + 1;     
    
      if (encuesta === 1) {
      this.pregunta = this.pregunta2;
      this.opciones = this.opciones2;
      this.porcentaje = 25;
      
    } else if (encuesta === 2) {
      this.pregunta = this.pregunta3;
      this.opciones = this.opciones3;
      this.porcentaje = 50;
      
    } else if (encuesta === 3) {
      this.pregunta = this.pregunta4;
      this.opciones = this.opciones4;
      this.porcentaje = 75;
      ;
    }else if (encuesta === 4) {
      this.pregunta = "";
      this.opciones = '¡Felicidades!, completaste la encuesta, tu resultado es : ' + afirmativo + '%';
      this.Correct = 'Compartir';
      this.Incorrect = 'Cancelar';
      this.porcentaje = 100;
     
    }else if (encuesta === 5){
      this.displayA = 'none';
      this.Incorrect = 'Reintentar';      
    }else if (encuesta === 6){
      encuesta = encuesta*0;   

      this.displayA = '';
      this.displayB = '';  

      this.pregunta = this.pregunta1;
      this.opciones = this.opciones1;

      this.Correct = 'Si';
      this.Incorrect = 'No';

      this.porcentaje = 0;
      afirmativo = 0;
      this.value = this.value * 0;
      console.log(afirmativo);
    }
  });}
}



Data(){
  this.valueChange.emit(this.value);
}
}
