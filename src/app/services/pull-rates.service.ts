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
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
      {
        name: 'Marvel (JP)' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'AVR', pullRate: '1 per 2 cases (replaces a RRR below)'},
              {rarity: 'MR', pullRate: '4'},
              {rarity: 'RRR', pullRate: '6 or 5'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'sp (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
      {
        name: 'Tokyo Revengers' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'ssp', pullRate: '1'},
              {rarity: 'trv', pullRate: '3'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'sp (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
      {
        name: "Miss Kobayashi's Dragon Maid" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'SSP', pullRate: '1'},
              {rarity: 'OVR', pullRate: '2'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SSP (td only)', pullRate: '1'},
              {rarity: 'OVR (td only)', pullRate: '1'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
      {
        name: "Rascal Does Not Dream of Bunny Girl Senpai" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'SEC', pullRate: '1 per 2 cases (replaces a SP below)'},
              {rarity: 'SP', pullRate: '2 or 1'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SP (td only)', pullRate: '1'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
      {
        name: "Rascal Does Not Dream of a Dreaming Girl" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'SEC', pullRate: '1 per 2 cases (replaces a SP below)'},
              {rarity: 'SP', pullRate: '2 or 1'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SP (td only)', pullRate: '1'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
      {
        name: "The Quintessential Quintuplets 2" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'ssp', pullRate: '1'},
              {rarity: 'hyr', pullRate: '1'},
              {rarity: 'ofr', pullRate: '2'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SP (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
      {
        name: "Hololive productions" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'ssp', pullRate: '1'},
              {rarity: 'sp', pullRate: '4'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SP (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
      {
        name: 'Mushoku Tensei: jobless reincarnation' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'ssp', pullRate: '1'},
              {rarity: 'sp', pullRate: '2'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'sp (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
      {
        name: 'Seven Deadly Sins' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'sp', pullRate: '2'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'sp (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '6'},
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
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'sp (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
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
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'sp (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
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
              {rarity: 'sec', pullRate: '1 per 2 cases (replaces a TTR below)'},
              {rarity: 'ttr', pullRate: '3 or 2'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'sp (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '6'},
            ]
          }
        ]
      },
    ]
    return of(data);
  }

  constructor() { }
}
