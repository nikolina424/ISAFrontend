import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyConsultationComponent } from './pharmacy-consultation.component';

describe('PharmacyConsultationComponent', () => {
  let component: PharmacyConsultationComponent;
  let fixture: ComponentFixture<PharmacyConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
