import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms' 
import { ApiSecretosService } from '../api-secretos.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  signUpForm; 

  constructor(private formBuilder: FormBuilder, 
    private service: ApiSecretosService,
    private router: Router) 
  {
      this.signUpForm = this.formBuilder.group({
        nombre: '',
        correo : '',
        password : '',
        disabled: true 
      })
   }

  ngOnInit(): void {
  }

  onSubmit(usuarioData): void{
    const signUp =  this.service.signUp(usuarioData).subscribe( creado => {
       return creado.Estado ; 
    });    

    if (signUp){
      this.signUpForm.reset();
      this.router.navigate(['/login'])
    } 
  }
 
}
