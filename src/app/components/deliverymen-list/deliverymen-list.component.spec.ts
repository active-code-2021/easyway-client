import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymenListComponent } from './deliverymen-list.component';

describe('DeliverymenListComponent', () => {
  let component: DeliverymenListComponent;
  let fixture: ComponentFixture<DeliverymenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverymenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
