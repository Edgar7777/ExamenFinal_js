import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCrearEntrenadorComponent } from './boton-crear-entrenador.component';

describe('BotonCrearEntrenadorComponent', () => {
  let component: BotonCrearEntrenadorComponent;
  let fixture: ComponentFixture<BotonCrearEntrenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonCrearEntrenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCrearEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
