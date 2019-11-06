import { TestBed } from '@angular/core/testing';

import { LanguageDetectionService } from './language-detection.service';

describe('LanguageDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageDetectionService = TestBed.get(LanguageDetectionService);
    expect(service).toBeTruthy();
  });
});
