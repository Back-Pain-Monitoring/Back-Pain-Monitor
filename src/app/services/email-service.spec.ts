import { TestBed } from '@angular/core/testing';

import { EmailService } from './email-service';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});