import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BooksComponent } from './books/books.component';
import { CrearUssuarioComponent } from './usuarios/crear-ussuario/crear-ussuario.component';
import { CrearLibroComponent } from './books/crear-libro/crear-libro.component';


@NgModule({
  declarations: [DashboardComponent, InicioComponent, NavbarComponent, UsuariosComponent, BooksComponent, CrearUssuarioComponent, CrearLibroComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedModule,
  ]
})
export class DashboardModule { }
