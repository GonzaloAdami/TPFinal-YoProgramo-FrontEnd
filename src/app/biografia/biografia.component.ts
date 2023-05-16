import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent implements OnInit {
  private apiUrl = 'http://localhost:8080/';
  @Input() biografia: string = "";

  constructor(private http: HttpClient) {}

  agregarBiografia(inputBiografia: string) {
    this.biografia = inputBiografia;
    // Aquí puedes realizar una llamada a la API REST para guardar la biografía en el servidor utilizando HttpClient
    // Por ejemplo, puedes utilizar el método post() de HttpClient para enviar la biografía al servidor
    // this.http.post(this.apiUrl + 'biografias', { biografia: inputBiografia }).subscribe(response => {
    //   console.log('Biografía agregada correctamente');
    // }, error => {
    //   console.error('Error al agregar la biografía');
    // });
  }

  ngOnInit(): void {}

}
