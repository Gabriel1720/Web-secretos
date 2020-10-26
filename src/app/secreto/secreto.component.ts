import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiSecretosService } from '../api-secretos.service';
import { ISecreto } from './ISecreto';

@Component({
  selector: 'app-secreto',
  templateUrl: './secreto.component.html',
  styleUrls: ['./secreto.component.css']
})
export class SecretoComponent implements OnInit {
  lista_secretos:ISecreto[] = []; 

  constructor(private service: ApiSecretosService) { }

  ngOnInit(): void {
       this.service.listaSecretos().subscribe(secreto_list => {
         //console.log(secreto_list.Secretos)
         secreto_list.Secretos.forEach(secreto => {
              this.lista_secretos.push(secreto);
              console.log(secreto)
         });
       })
  }
}
