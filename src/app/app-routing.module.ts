import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component' 
import { RegistroUsuarioComponent }  from './registro-usuario/registro-usuario.component'
import {UsuarioLoginComponent} from './usuario-login/usuario-login.component'
import {SecretoComponent} from './secreto/secreto.component'

const routes: Routes = [{path:'', component: HomeComponent },
                        {path :'signup', component : RegistroUsuarioComponent},
                        {path :'login', component : UsuarioLoginComponent},
                        {path :'secretos', component : SecretoComponent},
                        {path :'secretos/:id', redirectTo : 'secretos'},
                        {path :'logout', redirectTo : 'login'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
