import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-mostrar-detalle-entrenador',
  templateUrl: './mostrar-detalle-entrenador.component.html',
  styleUrls: ['./mostrar-detalle-entrenador.component.css']
})
export class MostrarDetalleEntrenadorComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private entrenadorService: EntrenadorService,
    private pokemonService: PokemonService,
    private location: Location
  ) {
    this.route.params.subscribe(params =>{
    this.entrenador = new Entrenador();
    this.pokemon = new Pokemon();
    //console.log('Esto es lo que muestra en los parametros que envia',params);
    this.entrenadorService.getEntrenador(params[`id`]).subscribe(entrenador => {
      this.entrenador= entrenador;
    }),
    this.pokemonService.getPokemon(params[`id`]).subscribe(pokemon => {
      this.pokemon= pokemon;
    })
  })
  }

  ngOnInit(): void {
   this.getEntrenador();
   this.getPokemon();
 }

 entrenador: Entrenador;
 pokemon: Pokemon;
 pokemons : Pokemon[] = new Array();
 entrenadorEntrada: Entrenador;
 entradaNombrePokemon:string;
 entradaNombres : string;
 entradaApellidos : string;
 entradaFechaNacimiento : string;
 entradaNumeroMedallas : string;
 entradaImagenes : string;
 
 getPokemon(): void {
   const id = +this.route.snapshot.paramMap.get('id');
   this.pokemonService.getPokemon(id)
     .subscribe(pokemon => this.pokemon = pokemon);
 }

 getEntrenador(): void {
   const id = +this.route.snapshot.paramMap.get('id');
   this.entrenadorService.getEntrenador(id)
     .subscribe(entrenador => this.entrenador = entrenador);
 }


 getPokemons(): void{
   this.pokemonService.getPokemons()
   .subscribe(pokemons => this.pokemons = pokemons);
 }

 goBack(): void {
   this.location.back();
 }

 save(): void {
   this.entrenadorEntrada = new Entrenador();
   //this.getEntrenador();
     const id = +this.route.snapshot.paramMap.get('id');
     this.entrenadorEntrada.idEntrenador = id;
     console.log('aqui estoy con: ' ,this.entrenador.idEntrenador);
   this.entrenadorEntrada.nombres = this.entradaNombres;
   this.entrenadorEntrada.apellidos = this.entradaApellidos;
   this.entrenadorEntrada.fechaNacimiento = this.entradaFechaNacimiento;
   this.entrenadorEntrada.numeroMedallas = this.entradaNumeroMedallas;
   this.entrenadorEntrada.imagenes = this.entradaImagenes;

   this.entrenadorService.updateEntrenador(this.entrenadorEntrada)
     .subscribe(response => {
     });
  }

}
