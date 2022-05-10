import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [ClientComponent, UserinfoComponent, HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
