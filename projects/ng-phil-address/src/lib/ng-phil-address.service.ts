import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import regionData from '../data/region.json';
import provinceData from '../data/province.json';
import cityData from '../data/city.json';
import barangayData from '../data/barangay.json';

@Injectable({
  providedIn: 'root',
})
export class NgPhilAddressService {
  regions() {
    return of(regionData);
  }

  provinces(code: string) {
    return of(provinceData).pipe(
      map((data: any) => {
        return data.filter((province: any) => {
          return province.region_code === code;
        });
      })
    );
  }

  cities(code: string) {
    return of(cityData).pipe(
      map((data: any) => {
        return data.filter((city: any) => {
          return city.province_code === code;
        });
      })
    );
  }

  barangays(code: string) {
    return of(barangayData).pipe(
      map((data: any) => {
        return data.filter((barangay: any) => {
          return barangay.city_code === code;
        });
      })
    );
  }

  getRegionByCode(code: string): Observable<any> {
    return of(regionData).pipe(
      map((data: any) => {
        return data.find((region: any) => region.region_code === code);
      })
    );
  }

  getProvinceByCode(code: string): Observable<any> {
    return of(provinceData).pipe(
      map((data: any) => {
        return data.find((province: any) => province.province_code === code);
      })
    );
  }

  getCityByCode(code: string): Observable<any> {
    return of(cityData).pipe(
      map((data: any) => {
        return data.find((city: any) => city.city_code === code);
      })
    );
  }

  getBarangayByCode(code: string): Observable<any> {
    return of(barangayData).pipe(
      map((data: any) => {
        return data.find((barangay: any) => barangay.brgy_code === code);
      })
    );
  }
}
