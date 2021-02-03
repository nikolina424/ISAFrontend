import { TestBed } from '@angular/core/testing';

import { PharmacistAppointmentService } from './pharmacist-appointment.service';

describe('PharmacistAppointmentService', () => {
  let service: PharmacistAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacistAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
