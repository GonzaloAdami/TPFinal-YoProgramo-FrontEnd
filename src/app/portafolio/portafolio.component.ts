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
  @Output() pushProfile =  new EventEmitter<string>();
 
  constructor(private http: HttpClient) {
    this.profile = '../../assets/img/perfil.gif';
  }
  
  Data(e: number) {
    this.resultado = e;
  }
  ngOnInit(): void {
    
    this.obtenerDatos().subscribe(
      (response: any) => {
        const datosJson = JSON.stringify(response);
        console.log(datosJson);
        
        /*this.usuarios = JSON.parse(datosJson); // Parsea los datos JSON a un objeto JavaScript
        console.log(this.usuarios);
        this.mostrarNombresUsuarios();*/
      },
      (error: any) => {
        console.error('Error al obtener los datos:', error);
      }
    );
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

