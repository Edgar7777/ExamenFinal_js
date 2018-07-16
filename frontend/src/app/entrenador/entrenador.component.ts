import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';

import { BuscadorComponent } from '../buscador/buscador.component';
import { BotonCargarMasComponent } from '../boton-cargar-mas/boton-cargar-mas.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {

    constructor(private entrenadorService: EntrenadorService) { }

    ngOnInit() {
      this.getEntrenadores();
    }
    entrenadores : Entrenador[];

    getEntrenadores(): void{
      this.entrenadorService.getEntrenadores()
      .subscribe(entrenadores => this.entrenadores = entrenadores);
    }
  }
