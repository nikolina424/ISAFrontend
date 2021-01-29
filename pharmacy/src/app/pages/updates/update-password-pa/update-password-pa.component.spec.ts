import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordPaComponent } from './update-password-pa.component';

describe('UpdatePasswordPaComponent', () => {
  let component: UpdatePasswordPaComponent;
  let fixture: ComponentFixture<UpdatePasswordPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasswordPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
