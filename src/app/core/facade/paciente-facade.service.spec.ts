import { TestBed } from '@angular/core/testing';

import { PacienteFacade } from './paciente-facade.service';

describe('PacienteFacade', () => {
  let service: PacienteFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
