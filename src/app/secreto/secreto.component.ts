import { Component, OnInit } from '@angular/core';
import { ApiSecretosService } from '../api-secretos.service';
import { ISecreto } from './ISecreto';

@Component({
  selector: 'app-secreto',
  templateUrl: './secreto.component.html',
  styleUrls: ['./secreto.component.css']
})
export class SecretoComponent implements OnInit {
  lista_secretos:ISecreto[] = []; 

  constructor(private service: ApiSecretosService){ }

  ngOnInit(): void {
       this.service.listaSecretos().subscribe(secreto_list => {
         //console.log(secreto_list.Secretos)
         secreto_list.Secretos.forEach(secreto => {
              this.lista_secretos.push(secreto);
              console.log(secreto)
         });
       })
  }

  delete(id:BigInteger):void {
        this.service.deleteSecreto(id).subscribe(datos =>{
            if(datos.Borrado){
              location.reload();
            } else {
               alert("Error al eliminar secreto.")
            }
        })
  }

  isthereAnySecrets():boolean{
    if(this.lista_secretos.length != 0){
      return true; 
    } else {
      return false; 
    }
  }
}
