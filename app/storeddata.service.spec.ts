import { TestBed } from '@angular/core/testing';

import { StoreddataService } from './services/storeddata.service';

describe('StoreddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreddataService = TestBed.get(StoreddataService);
    expect(service).toBeTruthy();
  });
});
