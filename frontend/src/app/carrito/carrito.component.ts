import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';

import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  pokemons: Pokemon[] = new Array();

constructor(
  private route: ActivatedRoute,
  private pokemonService: PokemonService,
  private _router: Router
) { }

ngOnInit() {
  this.getEntrenadores();
}

getEntrenadores(): void {
  this.pokemonService.getPokemons()
  .subscribe(entrenadores => this.pokemons = entrenadores);
}

 irAInfo() {
   const url = [
     'Entrenador/Lista'
   ];
   this._router.navigate(url);
   location.reload(true);
 }
}
