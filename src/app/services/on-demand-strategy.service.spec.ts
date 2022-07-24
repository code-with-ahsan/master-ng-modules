import { TestBed } from '@angular/core/testing';

import { OnDemandStrategyService } from './on-demand-strategy.service';

describe('OnDemandStrategyService', () => {
  let service: OnDemandStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnDemandStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
