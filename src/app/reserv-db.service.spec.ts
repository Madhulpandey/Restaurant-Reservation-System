import { TestBed } from '@angular/core/testing';

import { ReservDBService } from './reserv-db.service';

describe('ReservDBService', () => {
  let service: ReservDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
