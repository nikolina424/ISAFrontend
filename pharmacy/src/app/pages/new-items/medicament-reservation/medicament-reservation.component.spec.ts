import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentReservationComponent } from './medicament-reservation.component';

describe('MedicamentReservationComponent', () => {
  let component: MedicamentReservationComponent;
  let fixture: ComponentFixture<MedicamentReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
