import { TestBed } from '@angular/core/testing';

import { MedicamentReservationService } from './medicament-reservation.service';

describe('MedicamentReservationService', () => {
  let service: MedicamentReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicamentReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
