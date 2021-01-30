import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermatologistAvailableAppointmentComponent } from './dermatologist-available-appointment.component';

describe('DermatologistAvailableAppointmentComponent', () => {
  let component: DermatologistAvailableAppointmentComponent;
  let fixture: ComponentFixture<DermatologistAvailableAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermatologistAvailableAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DermatologistAvailableAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
