import { TestBed, inject } from '@angular/core/testing';

import { EntrenadorService } from './entrenador.service';

describe('EntrenadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntrenadorService]
    });
  });

  it('should be created', inject([EntrenadorService], (service: EntrenadorService) => {
    expect(service).toBeTruthy();
  }));
});
