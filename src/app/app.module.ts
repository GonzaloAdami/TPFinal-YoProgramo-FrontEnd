import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CirculoComponent } from './circulo/circulo.component';
import { SocialComponent } from './social/social.component';
import { UpdateImagenComponent } from './update-imagen/update-imagen.component';
import { PortadaComponent } from './portada/portada.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CirculoComponent,
    SocialComponent,
    UpdateImagenComponent,
    PortadaComponent,
    BiografiaComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectoComponent,
    EncuestaComponent,
    PortafolioComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
