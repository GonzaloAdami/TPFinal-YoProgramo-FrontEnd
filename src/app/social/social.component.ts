import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  @Input() color: string;
  @Input() color2: string;
  @Input() name: string = '';
  @Input() clase: string = ''; 
  @Input() imagen: string = '';
  @Input() alt: string = '';
  @Input() display: string = '';
  @Input() link: string = '';
constructor() {
  this.color = '';
  this.color2 = '';
  this.name = '';
  this.clase = '';
}
}
