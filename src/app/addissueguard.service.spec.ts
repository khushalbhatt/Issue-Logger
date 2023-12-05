import { TestBed } from '@angular/core/testing';

import { AddissueguardService } from './addissueguard.service';

describe('AddissueguardService', () => {
  let service: AddissueguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddissueguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
