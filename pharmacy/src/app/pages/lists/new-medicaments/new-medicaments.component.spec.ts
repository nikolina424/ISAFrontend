import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicamentsComponent } from './new-medicaments.component';

describe('NewMedicamentsComponent', () => {
  let component: NewMedicamentsComponent;
  let fixture: ComponentFixture<NewMedicamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMedicamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedicamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
