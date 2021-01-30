import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentPharmaciesComponent } from './medicament-pharmacies.component';

describe('MedicamentPharmaciesComponent', () => {
  let component: MedicamentPharmaciesComponent;
  let fixture: ComponentFixture<MedicamentPharmaciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentPharmaciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentPharmaciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
