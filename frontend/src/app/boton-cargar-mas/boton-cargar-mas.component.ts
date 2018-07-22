import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RutaInicioComponent } from '../ruta-inicio/ruta-inicio.component';

@Component({
  selector: 'app-boton-cargar-mas',
  templateUrl: './boton-cargar-mas.component.html',
  styleUrls: ['./boton-cargar-mas.component.css']
})
export class BotonCargarMasComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  irAInfo() {
    const url = [
      'Home'
    ];
    this._router.navigate(url);
  }

}
