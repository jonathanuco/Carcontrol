import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarComponent,
    HomeComponent,
    FormularioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
