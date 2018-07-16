import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

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

}
