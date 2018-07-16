import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-formulario-entrenador',
  templateUrl: './formulario-entrenador.component.html',
  styleUrls: ['./formulario-entrenador.component.css']
})

export class FormularioEntrenadorComponent implements OnInit {

  entrenadores: Entrenador[] = new Array();

  constructor(private entrenadorService: EntrenadorService) { }

  ngOnInit() {
  }
  addEntrenador(nombres: string, apellidos: string): void {
    nombres = nombres.trim();
    apellidos = apellidos.trim();
    if (!nombres && !apellidos) { return; }
    this.entrenadorService.addEntrenador({ nombres, apellidos } as Entrenador)
      .subscribe(entrenador => {
        this.entrenadores.push(entrenador);
      });
  }

  delete(entrenador: Entrenador): void {
    this.entrenadores = this.entrenadores.filter(e => e !== entrenador);
    this.entrenadorService.deleteEntrenador(entrenador).subscribe();
  }





}
