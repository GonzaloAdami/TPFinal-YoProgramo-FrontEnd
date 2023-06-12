import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.component.html',
  styleUrls: ['./icono.component.css']
})
export class IconoComponent {
@Input() color: string = '';
@Input() color2: string = '';
@Input() img: string = '';


@Output() instagramEvent = new EventEmitter<string>();
@Output() twitterEvent = new EventEmitter<string>();
@Output() githubEvent = new EventEmitter<string>();
@Output() linkedinEvent = new EventEmitter<string>();
@Output() facebookEvent = new EventEmitter<string>();

instragram: string = '';
twitter: string = '';
facebook: string = '';
linkedin: string = '';
github: string = '';
@Input() displayInstagram = '';
@Input() displayGithub = '';
@Input() displayLinkedin  = '';
@Input() displayTwitter = '';
@Input() displayFacebook = '';
instagramFunction() {
  if (this.displayInstagram === 'off') {
    this.instagramEvent.emit(this.instragram);
    console.log("Instagram actualizado a " + this.instragram)
  }
}
githubFunction(){
  if (this.displayGithub === 'off') { 
    this.githubEvent.emit(this.github);   
  }
}
linkedinFunction(){
  if (this.displayLinkedin === 'off') {
    this.linkedinEvent.emit(this.linkedin);  
  }
}
twitterFunction(){
  if (this.displayTwitter === 'off') {
    this.twitterEvent.emit(this.twitter);
  }
}
  facebookFunction(){
    if (this.displayFacebook === 'off') {  
      this.facebookEvent.emit(this.facebook);
    }
  }
  constructor() {
    this.color = '#FF0000';
    this.color2 = '#570202';
    this.img = '../../assets/img/new.webp';
    this.displayInstagram = 'on';
    this.displayGithub = 'on';
    this.displayLinkedin = 'on';
    this.displayTwitter = 'on';
    this.displayFacebook = 'on';
    
  }
  
}



