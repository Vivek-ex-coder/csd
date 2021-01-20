import { TestBed } from '@angular/core/testing';

import {feedbackService} from './feedback.service';

describe('feedbackService', () => {
  let service: feedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(feedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
