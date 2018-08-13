import { Component, OnInit, Input } from '@angular/core';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';
import { Location } from '@angular/common';
import { BuscadorComponent } from '../buscador/buscador.component';
import { BotonCargarMasComponent } from '../boton-cargar-mas/boton-cargar-mas.component';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {

  @Input() entrenador: Entrenador;
  entrenadorEntrada: Entrenador;
  entradaNombres : string;
  entradaApellidos : string;
  entradaFechaNacimiento : string;
  entradaNumeroMedallas : string;

  constructor(
    private route: ActivatedRoute,
    private entrenadorService: EntrenadorService,
    private location: Location,
    private _router: Router,
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

 save(): void {
   this.entrenadorEntrada = new Entrenador();
   //this.getEntrenador();
     const id = +this.route.snapshot.paramMap.get('id');
     this.entrenadorEntrada.idEntrenador = id;
     console.log('aqui estoy con: ' ,this.entrenador.idEntrenador);
   this.entrenadorEntrada.nombres = this.entradaNombres;
   this.entrenadorEntrada.apellidos = this.entradaApellidos;
   this.entrenadorEntrada.fechaNacimiento = this.entradaFechaNacimiento;
   this.entrenadorEntrada.numeroMedallas = this.entradaNumeroMedallas;
   this.entrenadorEntrada.imagenes = this.entrenador.imagenes;

   this.entrenadorService.updateEntrenador(this.entrenadorEntrada)
     .subscribe(response => {
     });
  }

  irAHome() {
    const url = [
      'Home'
    ];
    this._router.navigate(url);
    location.reload(true);
  }

  irAInfo() {
    const id = +this.route.snapshot.paramMap.get('id');
    const url = [
      'Entrenador',id,'Pokemon'
    ];
    this._router.navigate(url);
    location.reload(true);
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
