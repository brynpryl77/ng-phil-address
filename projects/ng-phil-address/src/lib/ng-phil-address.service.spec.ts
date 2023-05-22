import { TestBed } from '@angular/core/testing';

import { NgPhilAddressService } from './ng-phil-address.service';

describe('NgPhilAddressService', () => {
  let service: NgPhilAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPhilAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
