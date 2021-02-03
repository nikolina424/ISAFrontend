import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDermatologistComponent } from './complaint-dermatologist.component';

describe('ComplaintDermatologistComponent', () => {
  let component: ComplaintDermatologistComponent;
  let fixture: ComponentFixture<ComplaintDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintDermatologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
