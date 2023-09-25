import { ColorKey } from "../types";

type EnumToArrayFn = (input: {
  [k: string]: any;
}, inputType: 'enum' | 'obj') => string[];

// Helper
const validate = (value: string) => isNaN(Number(value)) === false;

const getLocalColors: EnumToArrayFn = (
  input,
  type
) => {
  // Turn enum into array
  const enumToArray = Object.keys(input);
  if (type === 'enum') {
    return enumToArray
    .filter(validate)
    .map(key => input[key as ColorKey]);
  }
  return enumToArray;
}

export default getLocalColors;
