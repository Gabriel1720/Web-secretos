import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { IConfig } from './config/config'
import { JwtHelperService } from '@auth0/angular-jwt';
 
const jwtHelper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})

export class ApiSecretosService {
   
  constructor(private http: HttpClient) { }

   
  isAuthenticated(): boolean{
     const token = JSON.parse(localStorage.getItem("token"))
     if (token){
        return true; 
     } else {
        return false ; 
     }
    // return !jwtHelper.isTokenExpired(token.access_token)
  }

  login(credenciales): Observable<IConfig>{
     const options = new HttpParams({fromString: `username=${credenciales.username}&password=${credenciales.password}`} ) ;  
  
     return  this.http.post<IConfig>('http://127.0.0.1:8000/token', options)
  }

  signUp(usuario): Observable<any>{
      return this.http.post('http://127.0.0.1:8000/registro', usuario)
   }

   listaSecretos(): Observable<any>{
      const header = {
         headers : new HttpHeaders({
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).access_token}`
         })
      };
    
      return this.http.get<any>('http://127.0.0.1:8000/usuario/secretos', header); 
   }

   nuevoSecreto(secreto): Observable<any>{
      const header = {
         headers : new HttpHeaders({
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).access_token}`,
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
         })
      };    
     
      return this.http.post<any>('http://127.0.0.1:8000/usuario/nuevo-secreto', secreto, header); 
   }

   deleteSecreto(id):Observable<any>{
      //http://127.0.0.1:8000/usuario/secreto/1
      const local = JSON.parse(localStorage.getItem("token"));
      const token = local.access_token ; 

      const header = {
         headers : new HttpHeaders({
            Authorization: `Bearer ${token}`
         })
      };

      return this.http.delete<any>(`http://127.0.0.1:8000/usuario/secreto/${id}`, header); 
   }

   getUsuarioDatos(): Observable<any>{
      const header = {
         headers : new HttpHeaders({
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).access_token}`
         })
      };
    
       return this.http.get("http://127.0.0.1:8000/usuario", header); 
   }

   updateUsuarioDatos(usuario): Observable<any>{
      const header = {
         headers : new HttpHeaders({
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).access_token}`
         })
      };
    
       return this.http.put(`http://127.0.0.1:8000/modificar/datos`,usuario,  header); 
   }

   updatePassword(datos): Observable<any>{
      const header = {
         headers : new HttpHeaders({
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).access_token}`
         })
      };
    
       return this.http.put(`http://127.0.0.1:8000/modificar/clave`, datos,  header); 
   }

}
