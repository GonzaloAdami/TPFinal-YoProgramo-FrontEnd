import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService{
  url="https://backend-0vro.onrender.com";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    console.log("200 OK");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
   }
   InisiarSesion(credenciales:any):Observable<any>
   {
     return this.http.post(this.url, credenciales).pipe(map(data=>{
    sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
     }));
   }
}
