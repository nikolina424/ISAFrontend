import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPharmacyMedicamentComponent } from './new-pharmacy-medicament.component';

describe('NewPharmacyMedicamentComponent', () => {
  let component: NewPharmacyMedicamentComponent;
  let fixture: ComponentFixture<NewPharmacyMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPharmacyMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPharmacyMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
