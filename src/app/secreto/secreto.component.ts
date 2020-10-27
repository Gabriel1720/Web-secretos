import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ApiSecretosService } from '../api-secretos.service';
import { ISecreto } from './ISecreto';

@Component({
  selector: 'app-secreto',
  templateUrl: './secreto.component.html',
  styleUrls: ['./secreto.component.css']
})
export class SecretoComponent implements OnInit {
  lista_secretos:ISecreto[] = []; 

  constructor(private service: ApiSecretosService,
              private route: ActivatedRoute){ }

  ngOnInit(): void {
       this.service.listaSecretos().subscribe(secreto_list => {
         //console.log(secreto_list.Secretos)
         secreto_list.Secretos.forEach(secreto => {
              this.lista_secretos.push(secreto);
              console.log(secreto)
         });
       })

       this.delete();
  }

  delete(){
    this.route.paramMap.subscribe(param => {
      console.log(param);
      this.service.deleteSecreto(param.get('id')).subscribe(estatus => {
           console.log(estatus.Borrado)
      })
     })
  }
}
