import { TestBed } from '@angular/core/testing';

import { PullRatesService } from './pull-rates.service';

describe('PullRatesService', () => {
  let service: PullRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
