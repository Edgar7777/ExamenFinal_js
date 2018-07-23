import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';

import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-entrenadores',
  templateUrl: './lista-entrenadores.component.html',
  styleUrls: ['./lista-entrenadores.component.css']
})
export class ListaEntrenadoresComponent implements OnInit {

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

   delete(id : number): void {
     this.entrenadorService.deleteEntrenador(id).subscribe();
   }

   irAInfo() {
     const url = [
       'Entrenador/Lista'
     ];
     this._router.navigate(url);
     location.reload(true);
   }

}
