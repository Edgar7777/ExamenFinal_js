import { Injectable } from '@angular/core';
import { Entrenador } from './entrenador';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {//variable que describe las cabeceras de http
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  entrenadorUrl = 'http://localhost:1337/entrenador';

  constructor(private http: HttpClient) { }

//METODO GET POR ID
  getEntrenador(id: number): Observable<Entrenador> {
    const url = `${this.entrenadorUrl}/${id}`;
    console.log('url :', url);
    return this.http.get<Entrenador>(url)
    .pipe(
      catchError(this.handleError<Entrenador>(`getEntrenador id=${id}`))
    );
  }

  //METODO GET***************************

  getEntrenadores(): Observable<Entrenador[]> {

    // TODO: obtener los entrenadores desde el sails

    return this.http.get<Entrenador[]>(this.entrenadorUrl)
      .pipe(
        catchError(this.handleError('getEntrenadores', []))
      );
    //TODO: el pipe desvia a un catch error cuando no funciona el metodo getEntrenadores
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //METODO POST
  addEntrenador (entrenador: Entrenador): Observable<Entrenador> {
   return this.http.post<Entrenador>(this.entrenadorUrl, entrenador, httpOptions)
   .pipe(
    catchError(this.handleError<Entrenador>('addEntrenador'))
   );
 }
//METODO DELETE
 deleteEntrenador (id : number): Observable<Entrenador> {
   console.log('idEnt : ',id);
   const url = `${this.entrenadorUrl}/${id}`;

   return this.http.delete<Entrenador>(url, httpOptions)
   .pipe(
     catchError(this.handleError<Entrenador>('deleteEntrenador'))
   );
 }

 //METODO PUT
 updateEntrenador (entrenador: Entrenador): Observable<any> {
    return this.http.put(this.entrenadorUrl, entrenador, httpOptions)
    .pipe(
      catchError(this.handleError<any>('updateEntrenador'))
    );
  }
}
