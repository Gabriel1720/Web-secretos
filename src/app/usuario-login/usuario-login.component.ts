import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms'
import {ApiSecretosService} from '../api-secretos.service'
import {Router} from '@angular/router'
 
@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {
  logInForm; 
  canLog:boolean; 

  constructor(private formBuilder: FormBuilder,
               private service:ApiSecretosService,
               private router: Router) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password : new FormControl('', Validators.required)
    })
  }

  onSubmit(credenciales){
       const loader  =  document.getElementById("loader");
       if (credenciales.username != "" && credenciales.password != "") {
            loader.classList.add('dot-flashing');
       }

      this.service.login(credenciales).subscribe(log => {
        console.log(log)
        loader.classList.remove('dot-flashing');
         
        if (!log.estado){
            this.canLog = !log.estado;
        }
        
       else  if(log.estado){
           localStorage.setItem("token" , JSON.stringify(log))
           this.router.navigate(['/secretos']) ;
        } 
      })
     
  }

}
