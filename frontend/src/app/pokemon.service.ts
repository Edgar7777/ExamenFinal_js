import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonUrl = 'http://localhost:1337/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons (): Observable<Pokemon[]> {

    // TODO: obtener los pokemons desde el sails

    return this.http.get<Pokemon[]>(this.pokemonUrl)
    .pipe(
        catchError(this.handleError('getPokemons', []))
      );
      //TODO: el pipe desvia a un catch error cuando no funciona el metodo getPokemons
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption


    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
