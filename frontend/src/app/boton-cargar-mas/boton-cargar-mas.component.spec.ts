import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCargarMasComponent } from './boton-cargar-mas.component';

describe('BotonCargarMasComponent', () => {
  let component: BotonCargarMasComponent;
  let fixture: ComponentFixture<BotonCargarMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonCargarMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCargarMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
