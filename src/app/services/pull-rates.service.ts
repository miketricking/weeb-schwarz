import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

export interface setPullRateInterface {
  name: string;
  ssp?: number;
  sp: number;
  boxesPerCase: number;
}

@Injectable({
  providedIn: 'root'
})
export class PullRatesService {

  getPullRates(): Observable<setPullRateInterface[]> {
    const data = [
     {
        name: 'Attack On Titan Vol 1' ,
        sp: 3,
        boxesPerCase: 16,
      },
      {
        name: 'Attack On Titan Vol 2' ,
        sp: 3,
        boxesPerCase: 16,
      },
      {
        name: 'Attack On Titan Final Season' ,
        ssp: 1,
        sp: 2,
        boxesPerCase: 18,
      },
      {
        name: 'Pixar' ,
        ssp: 1,
        sp: 4,
        pxr: 18,
        boxesPerCase: 18,
      },
    ]
    return of(data);
  }

  constructor() { }
}
