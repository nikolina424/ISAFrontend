import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordPharmacistComponent } from './update-password-pharmacist.component';

describe('UpdatePasswordPharmacistComponent', () => {
  let component: UpdatePasswordPharmacistComponent;
  let fixture: ComponentFixture<UpdatePasswordPharmacistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasswordPharmacistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
