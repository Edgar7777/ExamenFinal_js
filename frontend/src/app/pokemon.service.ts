import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {//variable que describe las cabeceras de http
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  pokemonUrl = 'http://localhost:1337/entrenador';
  private urlBase = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getPokemons (): Observable<Pokemon[]> {

    // TODO: obtener los pokemons desde el sails

    return this.http.get<Pokemon[]>(this.pokemonUrl)
    .pipe(
        catchError(this.handleError('getPokemons', []))
      );
      //TODO: el pipe desvia a un catch error cuando no funciona el metodo getPokemons
  }

  getPokemonByEntrenador(entrenadorId: number){
    const url = `${this.urlBase}/Pokemon?entrenadorId=${entrenadorId}`;
    return this.http.get<Pokemon>(url);
  }
  getLibroByName(nombre: string) {
    const url = `${this.urlBase}/Pokemon?nombrePokemon=${nombre}`;
    return this.http.get<Pokemon[]>(url);
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url)
      .pipe(
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
      );
  }

  //METODO POST
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.pokemonUrl, pokemon, httpOptions)
      .pipe(
        catchError(this.handleError<Pokemon>('addPokemon'))
      );
  }

  //METODO DELETE
  deletePokemon(id: number): Observable<Pokemon> {
    console.log('idEnt : ', id);
    const url = `${this.pokemonUrl}/${id}`;

    return this.http.delete<Pokemon>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Pokemon>('deletePokemon'))
      );
  }

  //METODO PUT
  updatePokemon(pokemon: Pokemon): Observable<any> {
    console.log('idact2: ',pokemon.idPokemon);
    const url = `${this.pokemonUrl}/${pokemon.idPokemon}`;
    return this.http.put<any>(url, pokemon, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updatePokemon'))
      );
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
