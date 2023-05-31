import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BiografiaService {
  private apiUrl = 'https://backend-0vro.onrender.comgit'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  actualizarBiografia(nuevaBiografia: string) {
    const body = { biografia: nuevaBiografia };
    return this.http.put(`${this.apiUrl}/biografia`, body);
  }
}
