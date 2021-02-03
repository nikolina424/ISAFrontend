import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePharmacistAppointmentsComponent } from './active-pharmacist-appointments.component';

describe('ActivePharmacistAppointmentsComponent', () => {
  let component: ActivePharmacistAppointmentsComponent;
  let fixture: ComponentFixture<ActivePharmacistAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePharmacistAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePharmacistAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
