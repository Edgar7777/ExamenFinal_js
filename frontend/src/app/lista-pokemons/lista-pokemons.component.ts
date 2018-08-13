import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';

import { BuscadorComponent } from '../buscador/buscador.component';
import { BotonCargarMasComponent } from '../boton-cargar-mas/boton-cargar-mas.component';
import { BotonCrearEntrenadorComponent } from '../boton-crear-entrenador/boton-crear-entrenador.component';
//import { BotonActualizarEntrenadorComponent } from '../boton-actualizar-entrenador/boton-actualizar-entrenador.component';
import { BotonEliminarEntrenadorComponent } from '../boton-eliminar-entrenador/boton-eliminar-entrenador.component';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";


@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})
export class ListaPokemonsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private entrenadorService: EntrenadorService,
    private pokemonService: PokemonService,
    private _router: Router,) { }

  ngOnInit() {
    this.getEntrenadores();
    this.getPokemons();
    // this.getTrainerId();
  }

  entrenadores : Entrenador[];
  pokemons : Pokemon[];
  // idTrainer : number;

  getEntrenadores(): void{
    this.entrenadorService.getEntrenadores()
    .subscribe(entrenadores => this.entrenadores = entrenadores);
  }
  getPokemons(): void{
    this.pokemonService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  // getTrainerId(): number{
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.idTrainer=id;
  //   console.log('hola',id);
  //   return id;
  // }

  tamanioArreglo():number {
    return this.entrenadores.length/8;
  }

}
