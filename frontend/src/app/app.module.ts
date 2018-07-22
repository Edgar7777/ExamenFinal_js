import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import {RouterModule} from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AutorizacionService} from "./autorizacion.service";

import {RUTAS_APP} from "./app.routes";
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { BotonCargarMasComponent } from './boton-cargar-mas/boton-cargar-mas.component';
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutaIniUsuarioComponent } from './ruta-ini-usuario/ruta-ini-usuario.component';
import { RutaIniPermisosComponent } from './ruta-ini-permisos/ruta-ini-permisos.component';
import { RutaFaqComponent } from './ruta-faq/ruta-faq.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { EntrenadorComponent } from './entrenador/entrenador.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BotonCrearEntrenadorComponent } from './boton-crear-entrenador/boton-crear-entrenador.component';
import { BotonActualizarEntrenadorComponent } from './boton-actualizar-entrenador/boton-actualizar-entrenador.component';
import { BotonEliminarEntrenadorComponent } from './boton-eliminar-entrenador/boton-eliminar-entrenador.component';
import { FormularioEntrenadorComponent } from './formulario-entrenador/formulario-entrenador.component';
import { MostrarDetalleEntrenadorComponent } from './mostrar-detalle-entrenador/mostrar-detalle-entrenador.component';
import { ListaEntrenadoresComponent } from './lista-entrenadores/lista-entrenadores.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    BotonCargarMasComponent,
    RutaInicioComponent,
    RutaIniUsuarioComponent,
    RutaIniPermisosComponent,
    RutaFaqComponent,
    RutaNoEncontradaComponent,
    EntrenadorComponent,
    PokemonComponent,
    BotonCrearEntrenadorComponent,
    BotonActualizarEntrenadorComponent,
    BotonEliminarEntrenadorComponent,
    FormularioEntrenadorComponent,
    MostrarDetalleEntrenadorComponent,
    ListaEntrenadoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        onSameUrlNavigation: 'reload',
        useHash: true
      }
    )
  ],
  exports: [RouterModule],
  providers: [
    AutorizacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
