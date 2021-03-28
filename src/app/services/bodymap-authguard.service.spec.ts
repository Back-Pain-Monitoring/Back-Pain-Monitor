import { TestBed } from '@angular/core/testing';

import { BodymapAuthguardService } from './bodymap-authguard.service';

describe('BodymapAuthguardService', () => {
  let service: BodymapAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodymapAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
