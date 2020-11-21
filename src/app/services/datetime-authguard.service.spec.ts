import { TestBed } from '@angular/core/testing';

import { DatetimeAuthguardService } from './datetime-authguard.service';

describe('DatetimeAuthguardService', () => {
  let service: DatetimeAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatetimeAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
