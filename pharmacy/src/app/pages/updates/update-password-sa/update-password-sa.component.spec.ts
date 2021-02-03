import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordSaComponent } from './update-password-sa.component';

describe('UpdatePasswordSaComponent', () => {
  let component: UpdatePasswordSaComponent;
  let fixture: ComponentFixture<UpdatePasswordSaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasswordSaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
