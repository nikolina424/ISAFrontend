import { TestBed } from '@angular/core/testing';

import { PharmacyMedicamentService } from './pharmacy-medicament.service';

describe('PharmacyMedicamentService', () => {
  let service: PharmacyMedicamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacyMedicamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
