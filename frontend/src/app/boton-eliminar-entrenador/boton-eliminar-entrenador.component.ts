import { Component, OnInit, Input } from '@angular/core';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-boton-eliminar-entrenador',
  templateUrl: './boton-eliminar-entrenador.component.html',
  styleUrls: ['./boton-eliminar-entrenador.component.css']
})
export class BotonEliminarEntrenadorComponent implements OnInit {

@Input() entrenador: Entrenador;

  constructor(
    private route: ActivatedRoute,
    private entrenadorService: EntrenadorService,
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

  delete(id : number): void {
    console.log('ete:', id);
    this.entrenadorService.deleteEntrenador(id).subscribe();
  }

}
