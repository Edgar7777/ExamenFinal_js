import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDetalleEntrenadorComponent } from './mostrar-detalle-entrenador.component';

describe('MostrarDetalleEntrenadorComponent', () => {
  let component: MostrarDetalleEntrenadorComponent;
  let fixture: ComponentFixture<MostrarDetalleEntrenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDetalleEntrenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDetalleEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
