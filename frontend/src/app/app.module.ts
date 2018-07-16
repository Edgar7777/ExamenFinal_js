import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {AutorizacionService} from "./autorizacion.service";

import {RUTAS_APP} from "./app.routes";
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { BotonCargarMasComponent } from './boton-cargar-mas/boton-cargar-mas.component';
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutaIniUsuarioComponent } from './ruta-ini-usuario/ruta-ini-usuario.component';
import { RutaIniPermisosComponent } from './ruta-ini-permisos/ruta-ini-permisos.component';
import { RutaFaqComponent } from './ruta-faq/ruta-faq.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { EntrenadorComponent } from './entrenador/entrenador.component';
import { PokemonComponent } from './pokemon/pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BuscadorComponent,
    BotonCargarMasComponent,
    RutaInicioComponent,
    RutaIniUsuarioComponent,
    RutaIniPermisosComponent,
    RutaFaqComponent,
    RutaNoEncontradaComponent,
    EntrenadorComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [
    AutorizacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
