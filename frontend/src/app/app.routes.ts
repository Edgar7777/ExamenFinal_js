import { RouterModule, Routes } from "@angular/router";
import { AutorizacionService } from "./autorizacion.service";
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutaIniUsuarioComponent } from './ruta-ini-usuario/ruta-ini-usuario.component';
import { RutaIniPermisosComponent } from './ruta-ini-permisos/ruta-ini-permisos.component';
import { RutaFaqComponent } from './ruta-faq/ruta-faq.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { EntrenadorComponent } from './entrenador/entrenador.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormularioEntrenadorComponent } from './formulario-entrenador/formulario-entrenador.component';
import { MostrarDetalleEntrenadorComponent } from './mostrar-detalle-entrenador/mostrar-detalle-entrenador.component';
import { ListaEntrenadoresComponent } from './lista-entrenadores/lista-entrenadores.component';


export const RUTAS_APP: Routes = [

  {
    path: 'Entrenador/Formulario',
    component: FormularioEntrenadorComponent
  },
  {
    path: 'Home',
    component: RutaInicioComponent
  },
  {
    path: 'Entrenador/Lista',
    component: ListaEntrenadoresComponent
  },
  {
    path: 'Entrenador/:id',
    component: EntrenadorComponent,
    children: [
      {
        path: 'Pokemon',
        component: PokemonComponent
      },
      {
        path: 'permisos',
        component: RutaIniPermisosComponent,
        canActivate: [
          AutorizacionService
        ]
      },
      {
        path: '',
        redirectTo: 'Entrenador',
        pathMatch: 'full'
      },
    ]
  },
  // {
  //   pa th: 'Entrenador/:id',
  //   component: MostrarDetalleEntrenadorComponent,
  // },
  {
    path: 'faq',
    component: RutaFaqComponent,
    canActivate: [
      // AutorizacionService
    ],
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradaComponent
  }
];
