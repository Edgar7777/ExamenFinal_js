import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEliminarEntrenadorComponent } from './boton-eliminar-entrenador.component';

describe('BotonEliminarEntrenadorComponent', () => {
  let component: BotonEliminarEntrenadorComponent;
  let fixture: ComponentFixture<BotonEliminarEntrenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonEliminarEntrenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEliminarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
