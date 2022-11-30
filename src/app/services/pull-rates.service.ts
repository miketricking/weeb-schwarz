import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

export interface setPullRateInterface {
  name: string;
  products: productInterface[];
}

export interface productInterface {
  type: productType;
  productPerCase: number;
  pulls: pullInterface[];
}

export interface pullInterface {
  rarity: string;
  pullRate: string;
}

export enum productType {
  BOOSTERBOXES = 'Booster Boxes',
  TRIALDECKS = 'Trial Decks',
}

@Injectable({
  providedIn: 'root'
})
export class PullRatesService {

  getPullRates(): Observable<setPullRateInterface[]> {
    const data = [

      {
        name: 'Pixar (JP)' ,
        products: [
          { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'luxo', pullRate: '1 in 24 cases - ish'},
              {rarity: 'ssp', pullRate: '1'},
              {rarity: 'sp', pullRate: '4'},
              {rarity: 'pxr', pullRate: '18'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'sp (td only)', pullRate: '2'},
              {rarity: 'RRR', pullRate: '6'},
            ]
          }
        ]
      },
     {
        name: 'Attack On Titan Vol 1' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'sp', pullRate: '3'},
            ]
          },
        ]
      },
      {
        name: 'Attack On Titan Vol 2' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'sp', pullRate: '3'},
            ]
          },
        ]
      },
      {
        name: 'Attack On Titan Final Season',
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'ssp', pullRate: '1'},
              {rarity: 'sp', pullRate: '2'},
            ]
          },
        ]
      },
    ]
    return of(data);
  }

  constructor() { }
}
