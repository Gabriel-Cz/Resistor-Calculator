import { useEffect, useState } from 'react';
import resistorModel from "../models/resistor.model"
import formatter from '../utils/decimal-fomatter';
import {
  ColorKey,
  BandColors,
  ISelectedColorsState,
  IDBColorsState,
  IActiveSelectorState,
  MultiplierColors,
  ToleranceColors
} from "../types"

export default function useResistor() {
  const [activeSelector, setActive] = useState<IActiveSelectorState>();
  const [dbColors, setDBColors] = useState<IDBColorsState>({
    multipliers: [],
    tolerance: []
  });
  const [selectedColors, setSelectedColors] = useState<ISelectedColorsState>({
    ['0']: {
      value: BandColors.Black,
      color: 'Black'
    },
    ['1']: {
      value: BandColors.Black,
      color: 'Black'
    },
    ['2']: {
      value: MultiplierColors.Black,
      color: 'Black'
    },
    ['3']: {
      value: ToleranceColors.Blue,
      color: 'Blue'
    },
  });

  type DefaultKey = keyof typeof BandColors;
  type ToleranceKey = keyof typeof ToleranceColors;

  const handleSelector = (color: ColorKey, index: number) => {
    const value = [0, 1].includes(index)
      ? BandColors[color as keyof typeof BandColors]
      : index === 2
        ? MultiplierColors[color as DefaultKey]
        : ToleranceColors[color as ToleranceKey];
    setActive({ color, index });
    setSelectedColors({
      ...selectedColors,
      [index]: {
        value: value,
        color
      }
    });
  }

  const onResetActive = () => setActive(undefined);

  const value = resistorModel.calculateValue(
    selectedColors[0].value,
    selectedColors[1].value,
    selectedColors[2].value,
    // selectedColors[0].value,
  );

  useEffect(() => {
    resistorModel.getDBColors(setDBColors)
  }, [])

  return {
    getValue: formatter.format(value),
    selectedColors,
    handleSelector,
    activeSelector,
    onResetActive,
    dbColors,
  }
}