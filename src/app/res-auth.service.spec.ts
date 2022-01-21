import { TestBed } from '@angular/core/testing';

import { ResAuthService } from './res-auth.service';

describe('ResAuthService', () => {
  let service: ResAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
