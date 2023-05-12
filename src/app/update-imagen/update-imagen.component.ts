import { Component, Input } from '@angular/core';

@Component({
  selector: 'update-imagen',
  templateUrl: './update-imagen.component.html',
  styleUrls: ['./update-imagen.component.css']
})
export class UpdateImagenComponent {
  @Input() id: string = '';
  
constructor() {
  this.id = '';

}
}
