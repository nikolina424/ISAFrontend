import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePharmacyAdminComponent } from './update-pharmacy-admin.component';

describe('UpdatePharmacyAdminComponent', () => {
  let component: UpdatePharmacyAdminComponent;
  let fixture: ComponentFixture<UpdatePharmacyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePharmacyAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePharmacyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
