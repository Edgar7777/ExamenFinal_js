import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonActualizarEntrenadorComponent } from './boton-actualizar-entrenador.component';

describe('BotonActualizarEntrenadorComponent', () => {
  let component: BotonActualizarEntrenadorComponent;
  let fixture: ComponentFixture<BotonActualizarEntrenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonActualizarEntrenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonActualizarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
