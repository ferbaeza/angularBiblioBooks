import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CrearLibroComponent } from './books/crear-libro/crear-libro.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearUssuarioComponent } from './usuarios/crear-ussuario/crear-ussuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'', component:InicioComponent},
    {path:'users', component:UsuariosComponent},
    {path:'books', component:BooksComponent},
    {path:'crear-libro', component:CrearLibroComponent},
    {path:'crear-user', component:CrearUssuarioComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
