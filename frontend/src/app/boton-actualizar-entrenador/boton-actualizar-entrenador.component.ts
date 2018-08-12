// import { Component, OnInit, Input } from '@angular/core';
// import { Entrenador } from '../entrenador';
// import { EntrenadorService } from '../entrenador.service';
// import { ActivatedRoute } from "@angular/router";
// import { Router } from "@angular/router";
// import { EntrenadorComponent } from "../entrenador/entrenador.component";
//
// @Component({
//   selector: 'app-boton-actualizar-entrenador',
//   templateUrl: './boton-actualizar-entrenador.component.html',
//   styleUrls: ['./boton-actualizar-entrenador.component.css']
// })
// export class BotonActualizarEntrenadorComponent implements OnInit {
//
//   @Input() entrenador: Entrenador;
//   @Input() nombres;
//   entrenadorEntrada: Entrenador;
//
//   constructor(
//     private route: ActivatedRoute,
//     private entrenadorService: EntrenadorService,
//     private _router: Router
//   ) { }
//
//   ngOnInit() {
//     this.getEntrenador();
//   }
//
//   getEntrenador(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     console.log('id: ', id);
//     this.entrenadorService.getEntrenador(id)
//       .subscribe(entrenador => this.entrenador = entrenador);
//   }
//
//   save(): void {
//     //  console.log("idact: ",id);
//     this.entrenadorEntrada = new Entrenador();
//     this.getEntrenador();
//       this.entrenadorEntrada.idEntrenador = this.entrenador.idEntrenador;
//       console.log('aqui estoy con: ' ,this.entrenador.idEntrenador);
//     this.entrenadorEntrada.nombres = this.nombres;
//     this.entrenadorEntrada.apellidos = this.entrenador.apellidos;
//     this.entrenadorEntrada.fechaNacimiento = this.entrenador.fechaNacimiento;
//     this.entrenadorEntrada.campeonActual = this.entrenador.campeonActual;
//     this.entrenadorEntrada.imagenes = this.entrenador.imagenes;
//
//     this.entrenadorService.updateEntrenador(this.entrenadorEntrada)
//       .subscribe(response => {
//       });
//   }
//
//   irAInfo() {
//     const url = [
//       'Home'
//     ];
//     this._router.navigate(url);
//     //location.reload(true);
//   }
//
// }
