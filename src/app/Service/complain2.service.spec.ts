import { TestBed } from '@angular/core/testing';

import { Complain2Service } from './complain2.service';

describe('Complain2Service', () => {
  let service: Complain2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Complain2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
