import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintPharmacyComponent } from './complaint-pharmacy.component';

describe('ComplaintPharmacyComponent', () => {
  let component: ComplaintPharmacyComponent;
  let fixture: ComponentFixture<ComplaintPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintPharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
