import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordSupplierComponent } from './update-password-supplier.component';

describe('UpdatePasswordSupplierComponent', () => {
  let component: UpdatePasswordSupplierComponent;
  let fixture: ComponentFixture<UpdatePasswordSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasswordSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
