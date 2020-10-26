import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {ApiSecretosService} from '../api-secretos.service'
import {Router} from '@angular/router'
 
@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {
  logInForm; 
  constructor(private formBuilder: FormBuilder, private service:ApiSecretosService, private router: Router) {
     this.logInForm = this.formBuilder.group({
       username: '',
       password : ''
     })
   }

  ngOnInit(): void {
  }

  onSubmit(credenciales){
      this.service.login(credenciales).subscribe(log => {
        console.log(log.access_token)
        if(log.estado){
          localStorage.setItem("token" , JSON.stringify(log))
          this.router.navigate(['/secretos']) ;
        } 
      });
  }

}
