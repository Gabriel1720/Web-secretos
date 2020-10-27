import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { ApiSecretosService } from '../api-secretos.service';

@Component({
  selector: 'app-nuevo-secreto',
  templateUrl: './nuevo-secreto.component.html',
  styleUrls: ['./nuevo-secreto.component.css']
})
export class NuevoSecretoComponent implements OnInit {
    nuevoSecreto ; 

  constructor(private formBuilder: FormBuilder, private servicio: ApiSecretosService) { }

  ngOnInit(): void {
       this.nuevoSecreto = this.formBuilder.group({
        descripcion: '',
        fecha:'',
        lat:'',
        lon:'',
        lugar:'',
        titulo:'',
        valor_monetario: ''
       })
  }

  onSubmit(secreto):void{
      console.log(secreto);
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
