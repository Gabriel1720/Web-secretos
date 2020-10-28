import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms' 
import { ApiSecretosService } from '../api-secretos.service';
import {Router} from '@angular/router'
 
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  signUpForm; 
  canSignUp:boolean;

  constructor(private formBuilder: FormBuilder, 
    private service: ApiSecretosService,
    private router: Router) {   }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      correo : new FormControl('', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*") 
      ]),
      password : new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      disabled: true 
    })

  }

  onSubmit(usuarioData): void{
    const signUp =  this.service.signUp(usuarioData).subscribe( creado => {
       console.log(creado);
       this.canSignUp = !creado.Estado ; 
       if(creado.Estado){
          this.signUpForm.reset(); 
          this.router.navigate(['/login'])
       }
    });    
  }
}
