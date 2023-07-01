import { TestBed } from '@angular/core/testing';

import { OsboSenseService } from './osbo-sense.service';

describe('OsboSenseService', () => {
  let service: OsboSenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsboSenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
