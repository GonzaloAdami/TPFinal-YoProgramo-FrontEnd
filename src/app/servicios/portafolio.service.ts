import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  url:string="https://backend-0vro.onrender.com";
  constructor(private http: HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>('https://backend-0vro.onrender.com');
  }

 
}
