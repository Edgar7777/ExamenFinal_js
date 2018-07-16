import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaIniUsuarioComponent } from './ruta-ini-usuario.component';

describe('RutaIniUsuarioComponent', () => {
  let component: RutaIniUsuarioComponent;
  let fixture: ComponentFixture<RutaIniUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaIniUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaIniUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
