import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms'
import { ApiSecretosService } from '../api-secretos.service';

@Component({
  selector: 'app-nuevo-secreto',
  templateUrl: './nuevo-secreto.component.html',
  styleUrls: ['./nuevo-secreto.component.css']
})
export class NuevoSecretoComponent implements OnInit {
    nuevoSecreto ; 
    camposVacios:boolean; 
  constructor(private formBuilder: FormBuilder, private servicio: ApiSecretosService) { }

  ngOnInit(): void {
       this.nuevoSecreto = this.formBuilder.group({
        descripcion: new FormControl('', Validators.required),
        fecha:new FormControl('', Validators.required),
        lat: new FormControl('', Validators.required),
        lon:new FormControl('', Validators.required),
        lugar:new FormControl('', Validators.required),
        titulo:new FormControl('', Validators.required),
        valor_monetario: new FormControl('', Validators.required)
       })
  }

  onSubmit(secreto):void{
      this.camposVacios = this.validarDatos(secreto); 
  
      if (!this.camposVacios){
            this.servicio.nuevoSecreto(secreto).subscribe(info => {
              console.log("code", info.status_code);
              if(info.status_code == 200){
                this.nuevoSecreto.reset(); 
              } else {
                   alert("error al crear el secreto.")
              }
          }); 
      }
  }


  validarDatos(secreto):boolean{
        console.log(secreto);
        for (const key in secreto) {
          if (Object.prototype.hasOwnProperty.call(secreto, key)) {
              const element = secreto[key];  
              if(element == ""){
                return true;   
              }
          }
        } 

        return false ; 
  }

}
