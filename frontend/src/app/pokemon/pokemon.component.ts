import { Component, OnInit, Input } from '@angular/core';
import { Entrenador } from '../entrenador';
import  {Pokemon }from "../pokemon";
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';
import { Location } from '@angular/common';
import { BuscadorComponent } from '../buscador/buscador.component';
import { BotonCargarMasComponent } from '../boton-cargar-mas/boton-cargar-mas.component';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: []
})
export class PokemonComponent implements OnInit {

  @Input() entrenador: Entrenador;
  @Input() pokemon:Pokemon;
  pokemonEntrada: Pokemon;


  entradaIdPokemon : number;
  entradaNumeroPokemon : number;
  entradaNombrePokemon : string;
  entradaPoderEspecialUno : string;
  entradaPoderEspecialDos : string;
  entradaFechaCaptura : string;
  entradaNivel : number;
  entradaEntrenadorId : number;

  constructor(
    private route: ActivatedRoute,
    private entrenadorService: EntrenadorService,
    private pokemonService: PokemonService,
    private location: Location,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getPokemon();
  }
  entrenadores: Entrenador[];

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entrenadorService.getEntrenador(id)
      .subscribe(entrenador => this.entrenador = entrenador);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
   this.pokemonEntrada = new Pokemon();
   //this.getEntrenador();
     const id = +this.route.snapshot.paramMap.get('id');
     this.pokemonEntrada.idPokemon = id;
     //console.log('aqui estoy con: ' ,this.entrenador.idEntrenador);
   this.pokemonEntrada.numeroPokemon = this.entradaNumeroPokemon;
   this.pokemonEntrada.nombrePokemon = this.entradaNombrePokemon;
   this.pokemonEntrada.poderEspecialUno = this.entradaPoderEspecialUno;
   this.pokemonEntrada.poderEspecialDos = this.entradaPoderEspecialDos;
   this.pokemonEntrada.fechaCaptura = this.entradaFechaCaptura;
    this.pokemonEntrada.nivel = this.entradaNivel;
     this.pokemonEntrada.entrenadorId = this.entrenador.idEntrenador;

   this.pokemonService.updatePokemon(this.pokemonEntrada)
     .subscribe(response => {
     });
  }

  irAHome() {
    const url = [
      'Home'
    ];
    this._router.navigate(url);
    location.reload(true);
  }

  irAInfo() {
    const id = +this.route.snapshot.paramMap.get('id');
    const url = [
      'Entrenador',this.entrenador.idEntrenador,'Pokemon',id,
    ];
    this._router.navigate(url);
    location.reload(true);
  }

  addEntrenador(nombres: string): void {
    nombres = nombres.trim();
    if (!nombres) { return; }
    this.entrenadorService.addEntrenador({ nombres } as Entrenador)
      .subscribe(entrenador => {
        this.entrenadores.push(entrenador);
      });
  }

}
