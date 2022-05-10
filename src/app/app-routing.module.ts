import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //{path:'', redirectTo:'login', pathMatch:'full'},
  {path:'', redirectTo:'client', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'client', loadChildren:()=>import('./components/client/client.module').then(c => c.ClientModule)},//CargaPerezosa
  {path:'dashboard', loadChildren:()=>import('./components/dashboard/dashboard.module').then(r => r.DashboardModule)},//CargaPerezosa
  {path:'**', redirectTo:'login', pathMatch:'full'},
];
/**
 * !IMPORTANT
 * *Cuanda se trabaja con el Routing incluir en el app.component.html
 * @router - @outlet
 * Con este archivo de routeo principal decidimos como queremos que se comporte nuestra app
 * Con la directiva @path '**' le indicamos que si ingresan una route que no tengamos declarada en nuestra 
 * app vamos a redireccionar a la route marcada
 * *CargaPerezosa -- en Angular podemos indicar que la app no cargue todos los modulos
 * de entrada sino, que vaya cargando a medida que el user navega por la app
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
