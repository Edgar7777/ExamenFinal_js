import { Component, OnInit, Input } from '@angular/core';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';
import { Location } from '@angular/common';
import { BuscadorComponent } from '../buscador/buscador.component';
import { BotonCargarMasComponent } from '../boton-cargar-mas/boton-cargar-mas.component';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {

  @Input() entrenador: Entrenador;

  constructor(
    private route: ActivatedRoute,
    private entrenadorService: EntrenadorService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEntrenador();
  }
  entrenadores: Entrenador[];

  getEntrenador(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entrenadorService.getEntrenador(id)
      .subscribe(entrenador => this.entrenador = entrenador);
  }

  goBack(): void {
    this.location.back();
  }

 save(id : number): void {
    this.entrenadorService.updateEntrenador(this.entrenador,id)
      .subscribe(() => this.goBack());
  }

  addEntrenador(nombres: string): void {
    nombres = nombres.trim();
    if (!nombres) { return; }
    this.entrenadorService.addEntrenador({ nombres } as Entrenador)
      .subscribe(entrenador => {
        this.entrenadores.push(entrenador);
      });
  }
}
