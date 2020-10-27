import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router'
import {ApiSecretosService} from './api-secretos.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router,
              public service: ApiSecretosService) { }

  canActivate():boolean{
       if(!this.service.isAuthenticated()){
          this.router.navigate(["login"]);
          return false;  
       }

       return true;
  }
}
