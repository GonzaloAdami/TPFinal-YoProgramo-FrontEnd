import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  datos$!: Observable<any>;
 @Input() porcentaje: number = 0;
  circuloHTML: number = 0;
  profile: string = "";
  parentValue: number = 0;
  resultado: number = 0;
  encuesta: number = 0;
 @Input() instagram: string = "";
 @Input() twitter: string = "";
 @Input()  github: string = "";
 @Input()  facebook: string = "";
 @Input()  linkedin: string = "";

  @Output() pushProfile =  new EventEmitter<string>();
  @Output() encuestaReset = new EventEmitter<number>();
 
  constructor(private http: HttpClient) {
    this.profile = '../../assets/img/perfil.webp';
    this.encuesta = 3;
    this.porcentaje = 0;
    this.instagram = "https://www.instagram.com"
    this.twitter = "https://www.twitter.com"
    this.github = "https://www.github.com"
    this.facebook = "https://www.facebook.com"
    this.linkedin = "https://www.linkedin.com"
  }
  
  configuracionLink() {
    console.log("links cambiados")
  
    console.log("El link ahora es" + this.instagram)
  }
  resetEncuesta() {
    this.encuesta = this.encuesta*0;
  }
  Data(e: number) {
    this.resultado = e;
  }
  ngOnInit(): void {
    const next = document.getElementById("next");
    if (next) {
      next.addEventListener('click', () => {
      
        this.porcentaje = this.porcentaje * 0;
        this.encuesta = this.encuesta * 0;
      ;
      });}
   /* this.obtenerDatos().subscribe(
      (response: any) => {
        const datosJson = JSON.stringify(response);
        console.log(datosJson);
        
        /*this.usuarios = JSON.parse(datosJson); // Parsea los datos JSON a un objeto JavaScript
        console.log(this.usuarios);
        this.mostrarNombresUsuarios();
      },
      (error: any) => {
        console.error('Error al obtener los datos:', error);
      }
    );*/
  }
  handleUpdateProfile(event: any):void {
    this.profile = event.toString();
    
   
  }
  /*mostrarNombresUsuarios(): void {
    const div = document.getElementById('nombre-usuario');
    if (div) {
      this.usuarios.forEach((usuario: any) => {
        div.innerHTML += `<p>${usuario.biografia}</p>`;
      });
    } else {
      console.error('Elemento div no encontrado en el DOM.');
    }
  }*/
  


  obtenerDatos(): Observable<any> {
    return this.http.get<any>('https://backend-0vro.onrender.com');
  }

  textoRecibido: string = '';
  twitterFunction(e:string){
    this.twitter = e;
  }
  githubFunction(e:string){
this.github = e;
  }
  facebookFunction(e:string){
    this.facebook = e;
  }
  instagramFunction(e:string){
this.instagram = e;
  }
  linkedinFunction(e:string){
    this.linkedin = e;
  } 
  //saberValorCirculo(porcentaje: number) {
    //porcentaje = (porcentaje / 25) * 118;
    //console.log(porcentaje);
  //}
  onValueChange(newValue: number) {
    this.parentValue = newValue;
  }
}
function handleUpdateProfile(e: any) {
  throw new Error('Function not implemented.');
}

