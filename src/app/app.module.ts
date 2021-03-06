import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule}  from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { SecretoComponent } from './secreto/secreto.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NuevoSecretoComponent } from './nuevo-secreto/nuevo-secreto.component';
import { AjustesComponent } from './ajustes/ajustes.component';
 
 
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroUsuarioComponent,
    UsuarioLoginComponent,
    SecretoComponent,
    HomeComponent,
    NuevoSecretoComponent,
    AjustesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
