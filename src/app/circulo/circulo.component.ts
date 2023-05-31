import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.css']
})
export class CirculoComponent {
  @Input() porcentaje: number = 0;
  @Input() descripcion: string = '';
  @Input () nombre: string = '';
  @Input() portentajeValor: number = 0;
  constructor (){
    this.porcentaje = 0;
    this.descripcion = '';
  }
 
}

