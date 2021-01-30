import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMedReservationsComponent } from './active-med-reservations.component';

describe('ActiveMedReservationsComponent', () => {
  let component: ActiveMedReservationsComponent;
  let fixture: ComponentFixture<ActiveMedReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveMedReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveMedReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
