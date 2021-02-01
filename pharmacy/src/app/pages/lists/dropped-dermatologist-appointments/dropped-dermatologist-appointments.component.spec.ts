import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppedDermatologistAppointmentsComponent } from './dropped-dermatologist-appointments.component';

describe('DroppedDermatologistAppointmentsComponent', () => {
  let component: DroppedDermatologistAppointmentsComponent;
  let fixture: ComponentFixture<DroppedDermatologistAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroppedDermatologistAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppedDermatologistAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
