import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';

import { BuscadorComponent } from '../buscador/buscador.component';
import { BotonCargarMasComponent } from '../boton-cargar-mas/boton-cargar-mas.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-ini-usuario',
  templateUrl: './ruta-ini-usuario.component.html',
  styleUrls: ['./ruta-ini-usuario.component.css']
})
export class RutaIniUsuarioComponent implements OnInit {

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
