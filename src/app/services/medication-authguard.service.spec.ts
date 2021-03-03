import { TestBed } from '@angular/core/testing';

import { MedicationAuthguardService } from './medication-authguard.service';

describe('MedicationAuthguardService', () => {
  let service: MedicationAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
