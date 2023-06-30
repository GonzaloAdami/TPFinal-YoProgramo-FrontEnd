import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
})
export class PortafolioComponent implements OnInit {
  datos$!: Observable<any>;
  @Input() porcentaje: number = 0;
  circuloHTML: number = 0;
  profile: string = '';
  parentValue: number = 0;
  resultado: number = 0;
  encuesta: number = 0;
  @Input() instagram: string = '';
  @Input() twitter: string = '';
  @Input() github: string = '';
  @Input() facebook: string = '';
  @Input() linkedin: string = '';
  nameUser: string = '';
  userName: string = '';

  @Output() pushProfile = new EventEmitter<string>();
  @Output() encuestaReset = new EventEmitter<number>();

  @ViewChild('loginContainer', { read: ViewContainerRef }) loginContainer!: ViewContainerRef; // Agregar '!' para indicar que se inicializará en el constructor
  loginComponentRef!: ComponentRef<LoginComponent>; // Agregar '!' para indicar que se inicializará en el constructor
 
  

  constructor(
    private http: HttpClient,
    private resolver: ComponentFactoryResolver
  ) {
    this.profile = '../../assets/img/perfil.webp';
    this.encuesta = 3;
    this.porcentaje = 0;
    this.instagram = 'https://www.instagram.com';
    this.twitter = 'https://www.twitter.com';
    this.github = 'https://www.github.com';
    this.facebook = 'https://www.facebook.com';
    this.linkedin = 'https://www.linkedin.com';
  }

 

  onUserLogged(name: string) {
    this.userName = name;
    this.loginComponentRef.destroy();
    this.pushProfile.emit(this.userName);
  }

 
  getData() {
    this.http
      .get('https://backend-0vro.onrender.com')
      .subscribe((response: any) => {
        this.nameUser = response.name;
        console.log(this.nameUser); //
      });
  }
  configuracionLink() {
    console.log('links cambiados');

    console.log('El link ahora es' + this.instagram);
  }
  resetEncuesta() {
    this.encuesta = this.encuesta * 0;
  }
  Data(e: number) {
    this.resultado = e;
  }
  ngOnInit(): void {
    this.getData();
    const token = localStorage.getItem('token');
    console.log('Token almacenado en el localStorage: ' + token);
  }

  handleUpdateProfile(event: any): void {
    this.profile = event.toString();
  }
  obtenerDatos(): Observable<any> {
    return this.http.get<any>('https://backend-0vro.onrender.com');
  }
  textoRecibido: string = '';
  twitterFunction(e: string) {
    this.twitter = e;
  }
  githubFunction(e: string) {
    this.github = e;
  }
  facebookFunction(e: string) {
    this.facebook = e;
  }
  instagramFunction(e: string) {
    this.instagram = e;
  }
  linkedinFunction(e: string) {
    this.linkedin = e;
  }
  onValueChange(newValue: number) {
    this.parentValue = newValue;
  }
}
function handleUpdateProfile(e: any) {
  throw new Error('Function not implemented.');
}
