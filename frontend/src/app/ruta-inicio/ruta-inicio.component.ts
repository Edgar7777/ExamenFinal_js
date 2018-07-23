import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';

import { BuscadorComponent } from '../buscador/buscador.component';
import { BotonCargarMasComponent } from '../boton-cargar-mas/boton-cargar-mas.component';
import { BotonCrearEntrenadorComponent } from '../boton-crear-entrenador/boton-crear-entrenador.component';
import { BotonActualizarEntrenadorComponent } from '../boton-actualizar-entrenador/boton-actualizar-entrenador.component';
import { BotonEliminarEntrenadorComponent } from '../boton-eliminar-entrenador/boton-eliminar-entrenador.component';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.css']
})
export class RutaInicioComponent implements OnInit {

  constructor(private entrenadorService: EntrenadorService, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getEntrenadores();
    this.getPokemons();
  }

  entrenadores : Entrenador[];
  pokemons : Pokemon[];

  getEntrenadores(): void{
    this.entrenadorService.getEntrenadores()
    .subscribe(entrenadores => this.entrenadores = entrenadores);
  }
  getPokemons(): void{
    this.pokemonService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  tamanioArreglo():number {
    return this.entrenadores.length/8;
  }

}
