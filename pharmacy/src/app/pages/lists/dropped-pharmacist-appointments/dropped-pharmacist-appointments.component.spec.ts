import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppedPharmacistAppointmentsComponent } from './dropped-pharmacist-appointments.component';

describe('DroppedPharmacistAppointmentsComponent', () => {
  let component: DroppedPharmacistAppointmentsComponent;
  let fixture: ComponentFixture<DroppedPharmacistAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroppedPharmacistAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppedPharmacistAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
