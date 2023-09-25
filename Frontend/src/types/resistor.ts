// This type could be extended to accept five band type
// But for now I will be focusing only in a four band type as the example of the test explain;
export type IOBandType = 'four';

export enum BandColors {
  Black = 0,
  Brown = 1,
  Red = 2,
  Orange = 3,
  Yellow = 4,
  Green = 5,
  Blue = 6,
  Purple = 7,
  Grey = 8,
  White = 9,
}

export type ColorKey = string;

export enum MultiplierColors {
  Black = 1,
  Brown = 10,
  Red = 100,
  Orange = 1000,
  Yellow = 10000,
  Green = 100000,
  Blue = 1000000,
  Purple = 10000000,
  Grey = 100000000,
  White = 1000000000,
  Gold = 0.1,
  Silver = 0.01
}

export enum ToleranceColors {
  Silver = 10,
  Gold = 5,
  Yellow = 4,
  Red = 2,
  Brown = 1,
  Green = 0.5,
  Grey = 0.05,
  Purple = 0.1,
  Blue = 0.25
}

export interface ISelectedColorsState {
  ['0']: {
    value: BandColors;
    color: string;
  },
  ['1']: {
    value: BandColors;
    color: string;
  },
  ['2']: {
    value: MultiplierColors;
    color: string;
  },
  ['3']: {
    value: ToleranceColors;
    color: string;
  }
}

export interface IDBColorsState {
  multipliers: {[k: string]: any};
  tolerance: {[k: string]: any};
}

export interface IActiveSelectorState {
  color: ColorKey;
  index: number;
}

export const testMultiplier = {
  Black: 0,
  Brown: 1,
  Red: 2,
  Orange: 3,
  Yellow: 4,
  Green: 5,
  Blue: 6,
  Purple: 7,
  Grey: 8,
  White: 9,
};