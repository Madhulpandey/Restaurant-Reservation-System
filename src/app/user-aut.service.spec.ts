import { TestBed } from '@angular/core/testing';

import { UserAutService } from './user-aut.service';

describe('UserAutService', () => {
  let service: UserAutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
