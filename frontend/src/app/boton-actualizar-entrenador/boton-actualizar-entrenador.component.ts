import { Component, OnInit, Input } from '@angular/core';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-boton-actualizar-entrenador',
  templateUrl: './boton-actualizar-entrenador.component.html',
  styleUrls: ['./boton-actualizar-entrenador.component.css']
})
export class BotonActualizarEntrenadorComponent implements OnInit {

  @Input() entrenador: Entrenador;

  constructor(
    private route: ActivatedRoute,
    private entrenadorService: EntrenadorService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getEntrenador();
  }

  getEntrenador(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ', id);
    this.entrenadorService.getEntrenador(id)
      .subscribe(entrenador => this.entrenador = entrenador);
  }

  save(id : number): void {
    console.log("idact: ",id);
     this.entrenadorService.updateEntrenador(this.entrenador, id)
   }

  irAInfo() {
    const url = [
      'Home'
    ];
    this._router.navigate(url);
    location.reload(true);
  }

}
