import {Routes} from "@angular/router";
import {AutorizacionService} from "./autorizacion.service";
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutaIniUsuarioComponent } from './ruta-ini-usuario/ruta-ini-usuario.component';
import { RutaIniPermisosComponent } from './ruta-ini-permisos/ruta-ini-permisos.component';
import { RutaFaqComponent } from './ruta-faq/ruta-faq.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';

export const RUTAS_APP: Routes = [
  {
    path: 'inicio/entrenador',
    component: RutaIniUsuarioComponent,
    children: [
      {
        path: 'pokemon',
        component: RutaIniUsuarioComponent
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
        redirectTo: 'entrenador/1/pokemon/25',
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
    redirectTo: 'inicio/',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradaComponent
  }
];
