import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePharmacyMedicamentComponent } from './update-pharmacy-medicament.component';

describe('UpdatePharmacyMedicamentComponent', () => {
  let component: UpdatePharmacyMedicamentComponent;
  let fixture: ComponentFixture<UpdatePharmacyMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePharmacyMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePharmacyMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
