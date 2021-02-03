import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordPatientComponent } from './update-password-patient.component';

describe('UpdatePasswordPatientComponent', () => {
  let component: UpdatePasswordPatientComponent;
  let fixture: ComponentFixture<UpdatePasswordPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasswordPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
