import { TestBed } from '@angular/core/testing';

import { ListCharactersService } from './list-characters.service';

describe('ListCharactersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListCharactersService = TestBed.get(ListCharactersService);
    expect(service).toBeTruthy();
  });
});
