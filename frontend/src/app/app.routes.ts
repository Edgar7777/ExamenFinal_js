import {RouterModule,Routes} from "@angular/router";
import {AutorizacionService} from "./autorizacion.service";
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutaIniUsuarioComponent } from './ruta-ini-usuario/ruta-ini-usuario.component';
import { RutaIniPermisosComponent } from './ruta-ini-permisos/ruta-ini-permisos.component';
import { RutaFaqComponent } from './ruta-faq/ruta-faq.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { EntrenadorComponent } from './entrenador/entrenador.component';
import { PokemonComponent } from './pokemon/pokemon.component';

export const RUTAS_APP: Routes = [
    {path: 'Home',
    component: RutaInicioComponent
    },
    {path: 'Entrenador',
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
