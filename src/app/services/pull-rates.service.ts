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
  BOOSTERBOXES = 'Booster Box',
  TRIALDECKS = 'Trial Deck',
}

@Injectable({
  providedIn: 'root'
})
export class PullRatesService {

  getPullRates(): Observable<setPullRateInterface[]> {
    const data = [
      {
        name: "Lycoris Recoil (JP)" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'ssp', pullRate: '1'},
              {rarity: 'ofr', pullRate: '2'},
              {rarity: 'lrr', pullRate: '2'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
            ]
          }
        ]
      },
      {
        name: "Chainsaw Man (JP)" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'CSMR', pullRate: 'Seems 1 per 12-15 cases'},
              {rarity: 'SS', pullRate: '3'},
              {rarity: 'OFR', pullRate: '4'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SSP (td only)', pullRate: '1'},
              {rarity: 'OFR (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '45'},
            ]
          }
        ]
      },
      {
        name: 'Disney 100 (JP)' ,
        products: [
          { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'OR', pullRate: '1 per 20 cases - ish'},
              {rarity: 'ssp', pullRate: '1'},
              {rarity: 'sp', pullRate: '3'},
              {rarity: 'hnd', pullRate: '16'},
            ]
          }
        ]
      },
        {
        name: 'Marvel Premium (JP)' ,
        products: [
          { 
            type: productType.BOOSTERBOXES,
            productPerCase: 30,
            pulls: [
              {rarity: 'sp', pullRate: '4'},
            ]
          }
        ]
      },
      {
        name: 'Star Wars Premium (JP)' ,
        products: [
          { 
            type: productType.BOOSTERBOXES,
            productPerCase: 30,
            pulls: [
              {rarity: 'sp', pullRate: '4 '},
            ]
          }
        ]
      },
      {
        name: 'That Time I Got Reincarnated As A Slime Vol 3 (JP)' ,
        products: [
          { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'sec', pullRate: '1 in 3 cases'},
              {rarity: 'sp', pullRate: '3 (or 2 if case contains a SEC)'},
            ]
          }
        ]
      },
      {
        name: 'Azur Lane (JP)' ,
        products: [
          { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'sec', pullRate: '1 in 3 cases'},
              {rarity: 'sp', pullRate: '4 (or 3 if case contains a SEC)'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SP (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '46'},
            ]
          }
        ]
      },
      {
        name: 'The Seven Deadly Sins: Revival of The Commandments' ,
        products: [
          { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'sp', pullRate: '2'},
              {rarity: 'dsr', pullRate: '3'},
            ]
          },
        ]
      },
      {
        name: 'Key all-star (JP)' ,
        products: [
          { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'sec', pullRate: '1 in 3 cases'},
              {rarity: 'KSC', pullRate: '1 (or 0 if case contains a SEC)'},
              {rarity: 'sp', pullRate: '2'},
            ]
          },
        ]
      },
      {
        name: 'Sword Art Online 10th Anniversary Animation (JP)' ,
        products: [
          { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'sec', pullRate: '1 in 3 cases'},
              {rarity: 'sp', pullRate: '3 (or 2 if case contains a SEC)'},
            ]
          },
        ]
      },
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
              {rarity: 'RRR (td only)', pullRate: '8'},
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
              {rarity: 'AVR', pullRate: '1 per 3 cases (replaces a RRR)'},
              {rarity: 'MR', pullRate: '4'},
              {rarity: 'RRR', pullRate: '6 (or 5 if case contains a AVR)'},
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
              {rarity: 'OFR', pullRate: '3'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SSP (td only)', pullRate: '1'},
              {rarity: 'OFR (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '45'},
            ]
          }
        ]
      },
      {
        name: "Saekano: How to Raise a Boring Girlfriend" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'SP', pullRate: '3'},
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
        name: "Rascal Does Not Dream of Bunny Girl Senpai" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'SEC', pullRate: '1 per 2 cases (replaces a SP below)'},
              {rarity: 'SP', pullRate: '2 (or 1 if case contains a SEC)'},
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
              {rarity: 'SP', pullRate: '2 (or 1 if case contains a SEC)'},
            ]
          },
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
        name: "The Quintessential Quintuplets" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'ssp', pullRate: '1 per 2 cases (replaces a SP below)'},
              {rarity: 'hyr', pullRate: '1'},
              {rarity: 'sp', pullRate: '3 (or 2 if case contains a SSP)'},
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
              {rarity: 'RRR (td only)', pullRate: '8'},
            ]
          }
        ]
      },
      {
        name: "Rent A Girlfriend" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'SSP', pullRate: '1'},
              {rarity: 'SP', pullRate: '2'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SP (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '8'},
            ]
          }
        ]
      },
      {
        name: "Danmachi - is it wrong to pick up girls in a dungeon" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'SSP', pullRate: '3'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'SP (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '8'},
            ]
          }
        ]
      },
      {
        name: "Sneaker Bunko (JP)" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'SP', pullRate: '2'},
              {rarity: 'SBR', pullRate: '2'},
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
        name: "Fujimi Fantasia Bunko" ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 18,
            pulls: [
              {rarity: 'SP', pullRate: '2'},
              {rarity: 'FBR', pullRate: '2'},
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
              {rarity: 'RRR (td only)', pullRate: '8'},
            ]
          }
        ]
      },
      {
        name: 'Fate/Grand Order Absolute Demonic Front Babylonia' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'sec', pullRate: '1 per 2 cases (replaces a SP below)'},
              {rarity: 'sp', pullRate: '3 (or 2 if case contains a SEC'},
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
        name: 'Fate/Stay night [Heaven’s Feel] Vol.2' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'sec', pullRate: '1 per 2 cases (replaces a SP below)'},
              {rarity: 'sp', pullRate: '3 (or 2 if case contains a SEC'},
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
        name: 'RWBY' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'sec', pullRate: '1 per 2 cases (replaces a SP below)'},
              {rarity: 'sp', pullRate: '2 (or 1 if case contains a SEC)'},
              {rarity: 'RBR', pullRate: '2'},
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
        name: 'Bofuri: I Don’t Want to Get Hurt, so I’ll Max Out My Defense' ,
        products: [
           { 
            type: productType.BOOSTERBOXES,
            productPerCase: 16,
            pulls: [
              {rarity: 'sec', pullRate: '1 per 2 cases (replaces a SP below)'},    
              {rarity: 'sp', pullRate: '4 (or 3 if case contains a SEC)'},
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
              {rarity: 'sec', pullRate: '1 per 2 cases (replaces a TTR below)'},
              {rarity: 'ttr', pullRate: '3 (or 2 if case contains a SEC)'},
            ]
          },
          {
            type: productType.TRIALDECKS,
            productPerCase: 48,
            pulls: [
              {rarity: 'sp (td only)', pullRate: '2'},
              {rarity: 'RRR (td only)', pullRate: '8'},
            ]
          }
        ]
      },
    ]
    return of(data);
  }

  constructor() { }
}
