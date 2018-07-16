import {Component} from '@angular/core';
import {Router} from "@angular/router";
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _router: Router) {
  }

  irAInfo() {
    const url = [
      'inicio', 'entrenador'
    ];
    this._router.navigate(url);
  }

  irAFAQ() {
    const url = ['/faq'];
    this._router.navigate(url);
  }
}
