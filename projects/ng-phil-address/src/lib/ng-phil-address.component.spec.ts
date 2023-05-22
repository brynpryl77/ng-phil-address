import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPhilAddressComponent } from './ng-phil-address.component';

describe('NgPhilAddressComponent', () => {
  let component: NgPhilAddressComponent;
  let fixture: ComponentFixture<NgPhilAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPhilAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgPhilAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
