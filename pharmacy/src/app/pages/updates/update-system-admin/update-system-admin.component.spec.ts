import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSystemAdminComponent } from './update-system-admin.component';

describe('UpdateSystemAdminComponent', () => {
  let component: UpdateSystemAdminComponent;
  let fixture: ComponentFixture<UpdateSystemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSystemAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSystemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
