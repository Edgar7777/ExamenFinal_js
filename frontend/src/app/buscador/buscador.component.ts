import { Entrenador } from '../entrenador';
import { Pokemon } from '../pokemon';
import { EntrenadorService } from '../entrenador.service';
import { PokemonService } from '../pokemon.service';

import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  entrenadores$ : Observable<Entrenador[]>;
   private searchTerms = new Subject<string>();

   constructor(private entrenadorService: EntrenadorService) {}

   search(term: string): void {
     this.searchTerms.next(term);
   }

   ngOnInit(): void {
     this.entrenadores$ = this.searchTerms.pipe(
       debounceTime(300),
       distinctUntilChanged(),
       switchMap((term: string) => this.entrenadorService.searchEntrenadores(term)),
     );
   }

}
