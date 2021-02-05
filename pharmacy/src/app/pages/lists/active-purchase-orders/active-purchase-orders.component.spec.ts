import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePurchaseOrdersComponent } from './active-purchase-orders.component';

describe('ActivePurchaseOrdersComponent', () => {
  let component: ActivePurchaseOrdersComponent;
  let fixture: ComponentFixture<ActivePurchaseOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePurchaseOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePurchaseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
