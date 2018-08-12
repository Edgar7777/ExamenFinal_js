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
  entrenadorEntrada: Entrenador;

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
   this.entrenadorEntrada = new Entrenador();
   this.entrenadorEntrada.idEntrenador=this.entrenador.idEntrenador;
   this.entrenadorEntrada.nombres=this.entrenador.nombres;
    this.entrenadorEntrada.apellidos=this.entrenador.apellidos;
     this.entrenadorEntrada.fechaNacimiento=this.entrenador.fechaNacimiento;
     this.entrenadorEntrada.campeonActual=this.entrenador.campeonActual;
     this.entrenadorEntrada.imagenes=this.entrenador.imagenes;

   this.entrenadorService.updateEntrenador(this.entrenadorEntrada)
     .subscribe(response => {
    });
 }

}
