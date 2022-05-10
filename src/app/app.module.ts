import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Componentes
 */
import { LoginComponent } from './components/login/login.component';
/**
 * He creado un modulo secundario, donde importamos todos los mosulos de Material de Angular
 * y ese mismo modulo lo importamos aqui para poder usar los modulos importados en el
 * *Pero es muy importante en el modulo secundario hacer uso del exports
 * *sin el solo usariamos los modulos en la carpeta donde se aloja el modulo
 * @exports IMPORTANT
 */
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
