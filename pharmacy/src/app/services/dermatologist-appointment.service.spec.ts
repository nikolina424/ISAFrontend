import { TestBed } from '@angular/core/testing';

import { DermatologistAppointmentService } from './dermatologist-appointment.service';

describe('DermatologistAppointmentService', () => {
  let service: DermatologistAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DermatologistAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
