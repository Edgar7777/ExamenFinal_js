import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-formulario-entrenador',
  templateUrl: './formulario-entrenador.component.html',
  styleUrls: ['./formulario-entrenador.component.css']
})

export class FormularioEntrenadorComponent implements OnInit {

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

  addEntrenador(nombres: string, apellidos: string, fechaNacimiento: string, numeroMedallas: string): void {
    nombres = nombres.trim();
    apellidos = apellidos.trim();
    fechaNacimiento = fechaNacimiento.trim();
    numeroMedallas = numeroMedallas.trim();
    if (!nombres && !apellidos && !fechaNacimiento && !numeroMedallas) { return; }
    this.entrenadorService.addEntrenador({ nombres, apellidos, fechaNacimiento , numeroMedallas} as Entrenador)
      .subscribe(entrenador => {
        this.entrenadores.push(entrenador);
      });
  }

  irAInfo() {
    const url = [
      'Home'
    ];
    this._router.navigate(url);
    location.reload(true);
  }

  // delete(id : number): void {
  //   this.entrenadorService.deleteEntrenador(id).subscribe();
  // }
}
