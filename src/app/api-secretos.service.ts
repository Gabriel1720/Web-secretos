import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { IConfig } from './config/config'
 
@Injectable({
  providedIn: 'root'
})
export class ApiSecretosService {
   
  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean{
     const token = JSON.parse(localStorage.getItem("token"))
   //  return !this.jwt_token.isTokenExpired(token.access_token)
    return true
  }



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



   nuevoSecreto(secreto){
      const local = JSON.parse(localStorage.getItem("token"));
      const token = local.access_token ; 

      const header = {
         headers : new HttpHeaders({
             Authorization: `Bearer ${token}`
         })
      };
      return this.http.post<any>(`http://127.0.0.1:8000/usuario/nuevo-secreto?titulo=${secreto.titulo}&descripcion=${secreto.descripcion}&valor_monetario=${secreto.valor_monetario}&fecha=${secreto.fecha}&lugar=${secreto.lugar}&lat=${secreto.lat}&lon=${secreto.lon}`, header); 
   }

   deleteSecreto(id):Observable<any>{
      //http://127.0.0.1:8000/usuario/secreto/1
      const local = JSON.parse(localStorage.getItem("token"));
      const token = local.access_token ; 

      const header = {
         headers : new HttpHeaders({
            'content-type': 'application/json',
            'access-control-allow-credentials': 'true',
            Authorization: `Bearer ${token}`
         })
      };
      return this.http.delete<any>(`http://127.0.0.1:8000/usuario/secreto/${id}`, header); 
   }
}
