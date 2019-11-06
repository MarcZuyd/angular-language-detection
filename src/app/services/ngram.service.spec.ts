import { TestBed } from '@angular/core/testing';

import { NgramService } from './ngram.service';

describe('NgramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgramService = TestBed.get(NgramService);
    expect(service).toBeTruthy();
  });
});
