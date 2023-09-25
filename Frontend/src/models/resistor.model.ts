import { AxiosInstance } from "axios";
import { BandColors, IDBColorsState, MultiplierColors } from "src/types";
import axiosInstance from "../utils/axios-instance";

export default new class ResistorModel {
  private client: AxiosInstance;

  constructor() {
    this.client = axiosInstance
  }

  async getDBColors(setFn: React.Dispatch<React.SetStateAction<IDBColorsState>>) {
    try {
      const { data } = await this.client.get('/resistor/colors');
      const values = data.values;
      setFn({
        multipliers: values['multipliers'],
        tolerance: values['tolerance'],
      });
    } catch (error) {
      if (typeof error !== 'undefined' && error) {
        throw new Error(error.toString());
      }
      throw new Error('Unexpected Error, Refresh the Page');
    }
  }

  calculateValue(
    bandColor1: BandColors,
    bandColor2: BandColors,
    multiplier: MultiplierColors,
  ) {
    // The digits of the value
    const digits = parseInt(`${bandColor1}${bandColor2}`);
    // The value to multiply
    // const decimals = 10 * multiplier;
    // The result of the equation
    const result = digits * multiplier;
    // console.log(multiplier);
    // console.log(decimals);
    return parseFloat(result.toString());
  }
}