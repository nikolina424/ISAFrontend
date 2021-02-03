import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordDermatologistComponent } from './update-password-dermatologist.component';

describe('UpdatePasswordDermatologistComponent', () => {
  let component: UpdatePasswordDermatologistComponent;
  let fixture: ComponentFixture<UpdatePasswordDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasswordDermatologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
