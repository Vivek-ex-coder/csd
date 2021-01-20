import { TestBed } from '@angular/core/testing';

import { complainsService } from './complains.service';

describe('complainsService', () => {
  let service: complainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(complainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
