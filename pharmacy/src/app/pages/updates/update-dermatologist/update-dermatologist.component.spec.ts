import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDermatologistComponent } from './update-dermatologist.component';

describe('UpdateDermatologistComponent', () => {
  let component: UpdateDermatologistComponent;
  let fixture: ComponentFixture<UpdateDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDermatologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
