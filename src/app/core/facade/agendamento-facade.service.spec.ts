import { TestBed } from '@angular/core/testing';

import { AgendamentoFacade } from './agendamento-facade.service';

describe('AgendamentoFacade', () => {
  let service: AgendamentoFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentoFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
