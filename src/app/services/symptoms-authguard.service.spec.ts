import { TestBed } from '@angular/core/testing';

import { SymptomsAuthguardService } from './symptoms-authguard.service';

describe('SymptomsAuthguardService', () => {
  let service: SymptomsAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymptomsAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
