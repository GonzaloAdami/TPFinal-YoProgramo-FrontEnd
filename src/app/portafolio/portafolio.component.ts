import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  porcentaje: number = 0;
  circuloHTML: number = 0;
  saberValorEncuesta(porcentaje: number){
    console.log(porcentaje)
    };
    saberValorCirculo(porcentaje: number){
      porcentaje = (porcentaje / 25)*118;
      console.log(porcentaje)
    }
}
