import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDermatologistAppointmentsComponent } from './active-dermatologist-appointments.component';

describe('ActiveDermatologistAppointmentsComponent', () => {
  let component: ActiveDermatologistAppointmentsComponent;
  let fixture: ComponentFixture<ActiveDermatologistAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveDermatologistAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDermatologistAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
