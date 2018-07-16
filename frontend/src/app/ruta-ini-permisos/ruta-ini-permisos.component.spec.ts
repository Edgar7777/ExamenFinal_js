import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaIniPermisosComponent } from './ruta-ini-permisos.component';

describe('RutaIniPermisosComponent', () => {
  let component: RutaIniPermisosComponent;
  let fixture: ComponentFixture<RutaIniPermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaIniPermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaIniPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
