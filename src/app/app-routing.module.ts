import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component' 
import { RegistroUsuarioComponent }  from './registro-usuario/registro-usuario.component'
import {UsuarioLoginComponent} from './usuario-login/usuario-login.component'
import {SecretoComponent} from './secreto/secreto.component'
import {NuevoSecretoComponent} from './nuevo-secreto/nuevo-secreto.component'
import {AjustesComponent} from './ajustes/ajustes.component'
import { AuthGuardService as AuthGuard} from './auth-guard.service'


const routes: Routes = [{path:'', component: HomeComponent },
                        {path :'signup', component : RegistroUsuarioComponent},
                        {path :'login', component : UsuarioLoginComponent},
                        {path :'secretos', component : SecretoComponent, canActivate : [AuthGuard]},
                        {path:"nuevo", component : NuevoSecretoComponent, canActivate : [AuthGuard]},
                        {path : "ajustes", component : AjustesComponent, canActivate : [AuthGuard]}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
