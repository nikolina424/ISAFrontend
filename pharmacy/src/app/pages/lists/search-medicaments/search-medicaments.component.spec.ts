import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedicamentsComponent } from './search-medicaments.component';

describe('SearchMedicamentsComponent', () => {
  let component: SearchMedicamentsComponent;
  let fixture: ComponentFixture<SearchMedicamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMedicamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMedicamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
