import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  {path:'', component:ClientComponent,children:[
    {path:'', component: HomeComponent},
    {path:'user', component:UserinfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
