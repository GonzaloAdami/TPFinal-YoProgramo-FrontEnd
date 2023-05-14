import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.css']
})
export class CirculoComponent {
  porcentaje: number = 0;
  @Input() descripcion: string = '';
  @Input () nombre: string = '';
  constructor (){
    this.porcentaje = 0;
    this.descripcion = '';
  }
  
}

