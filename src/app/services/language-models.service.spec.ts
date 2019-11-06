import { TestBed } from '@angular/core/testing';

import { LanguageModelsService } from './language-models.service';

describe('LanguageModelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageModelsService = TestBed.get(LanguageModelsService);
    expect(service).toBeTruthy();
  });
});
