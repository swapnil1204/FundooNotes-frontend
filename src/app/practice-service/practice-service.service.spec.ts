import { TestBed } from '@angular/core/testing';

import { PracticeServiceService } from './practice-service.service';

describe('PracticeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracticeServiceService = TestBed.get(PracticeServiceService);
    expect(service).toBeTruthy();
  });
});
