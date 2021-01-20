import { TestBed } from '@angular/core/testing';

import { FeedBService } from './feed-b.service';

describe('FeedBService', () => {
  let service: FeedBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
