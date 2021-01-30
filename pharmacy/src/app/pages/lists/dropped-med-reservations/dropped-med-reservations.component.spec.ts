import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppedMedReservationsComponent } from './dropped-med-reservations.component';

describe('DroppedMedReservationsComponent', () => {
  let component: DroppedMedReservationsComponent;
  let fixture: ComponentFixture<DroppedMedReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroppedMedReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppedMedReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
