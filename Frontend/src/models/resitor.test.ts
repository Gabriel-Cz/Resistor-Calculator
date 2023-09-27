import { expect, test, expectTypeOf } from 'vitest';
import resitorModel from './resistor.model';
import {
  BandColors,
  MultiplierColors,
  ToleranceColors
} from "../types";

const mockColors = {
  ['0']: {
    value: BandColors.Red,
    color: 'Red'
  },
  ['1']: {
    value: BandColors.Red,
    color: 'Black'
  },
  ['2']: {
    value: MultiplierColors.Orange,
    color: 'Black'
  },
  ['3']: {
    value: ToleranceColors.Gold,
    color: 'Blue'
  },
}

test('Compute the value for the respective mock colors obj', () => {
  const value = resitorModel.calculateValue(
    mockColors[0].value,
    mockColors[1].value,
    mockColors[2].value,
  );
  expect(value).toBe(22000)
});

test('Get the extra colors from the Backend', () => {
  const promise = resitorModel.getDBColors;
  expectTypeOf(promise).returns.resolves.toBeObject
});