import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';


@Component({
  selector: 'app-mostrar-detalle-entrenador',
  templateUrl: './mostrar-detalle-entrenador.component.html',
  styleUrls: ['./mostrar-detalle-entrenador.component.css']
})
export class MostrarDetalleEntrenadorComponent implements OnInit {

  @Input() entrenador: Entrenador;

  constructor(
    private route: ActivatedRoute,
    private entrenadorService: EntrenadorService,
    private location: Location
  ) { }

  ngOnInit(): void {
   this.getEntrenador();
 }

 getEntrenador(): void {
   const id = +this.route.snapshot.paramMap.get('id');
   this.entrenadorService.getEntrenador(id)
     .subscribe(entrenador => this.entrenador = entrenador);
 }

 goBack(): void {
   this.location.back();
 }

save(): void {
   this.entrenadorService.updateEntrenador(this.entrenador)
     .subscribe(() => this.goBack());
 }

}
