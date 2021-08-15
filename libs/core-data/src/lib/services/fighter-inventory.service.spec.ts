import { TestBed } from '@angular/core/testing';

import { FighterInventoryService } from './fighter-inventory.service';

describe('FighterInventoryService', () => {
  let service: FighterInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FighterInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
