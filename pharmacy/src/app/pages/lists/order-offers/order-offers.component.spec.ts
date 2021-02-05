import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOffersComponent } from './order-offers.component';

describe('OrderOffersComponent', () => {
  let component: OrderOffersComponent;
  let fixture: ComponentFixture<OrderOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
