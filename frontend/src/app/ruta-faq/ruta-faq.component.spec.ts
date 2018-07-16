import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaFaqComponent } from './ruta-faq.component';

describe('RutaFaqComponent', () => {
  let component: RutaFaqComponent;
  let fixture: ComponentFixture<RutaFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
