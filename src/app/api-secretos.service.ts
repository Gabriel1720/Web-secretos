import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { IConfig } from './config/config'
import { ISecreto } from './secreto/ISecreto';

@Injectable({
  providedIn: 'root'
})
export class ApiSecretosService {
   
  constructor(private http: HttpClient) { }

  login(credenciales): Observable<IConfig>{
     const options = new HttpParams({fromString: `username=${credenciales.username}&password=${credenciales.password}`} ) ;  
  
     return  this.http.post<IConfig>('http://127.0.0.1:8000/token', options)
  }

  signUp(usuario): Observable<any>{
      return this.http.post('http://127.0.0.1:8000/registro', usuario)
   }

   listaSecretos(): Observable<any>{
      const local = JSON.parse(localStorage.getItem("token"));
      const token = local.access_token ; 

      const header = {
         headers : new HttpHeaders({
            Authorization: `Bearer ${token}`
         })
      };

      return this.http.get<any>('http://127.0.0.1:8000/usuario/secretos', header); 
   }
}
