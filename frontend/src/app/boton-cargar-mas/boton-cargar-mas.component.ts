import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-boton-cargar-mas',
  templateUrl: './boton-cargar-mas.component.html',
  styleUrls: ['./boton-cargar-mas.component.css']
})
export class BotonCargarMasComponent implements OnInit {

  entrenadores: Entrenador[] = new Array();

  constructor(
    private route: ActivatedRoute,
    private entrenadorService: EntrenadorService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getEntrenadores();
  }

  getEntrenadores(): void {
    this.entrenadorService.getEntrenadores()
    .subscribe(entrenadores => this.entrenadores = entrenadores);
  }

  tamanioArreglo():number{
    return this.entrenadores.length/9;
  }
}
