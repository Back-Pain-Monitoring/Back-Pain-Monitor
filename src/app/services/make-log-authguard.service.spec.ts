import { TestBed } from '@angular/core/testing';

import { MakeLogAuthguardService } from './make-log-authguard.service';

describe('MakeLogAuthguardService', () => {
  let service: MakeLogAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeLogAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
