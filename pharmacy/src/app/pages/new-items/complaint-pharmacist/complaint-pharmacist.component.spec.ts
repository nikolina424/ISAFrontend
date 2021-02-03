import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintPharmacistComponent } from './complaint-pharmacist.component';

describe('ComplaintPharmacistComponent', () => {
  let component: ComplaintPharmacistComponent;
  let fixture: ComponentFixture<ComplaintPharmacistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintPharmacistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
