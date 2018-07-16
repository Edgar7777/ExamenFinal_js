import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { BotonCargarMasComponent } from './boton-cargar-mas/boton-cargar-mas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BuscadorComponent,
    BotonCargarMasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
