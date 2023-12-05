import { TestBed } from '@angular/core/testing';

import { IssueguardService } from './issueguard.service';

describe('IssueguardService', () => {
  let service: IssueguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
