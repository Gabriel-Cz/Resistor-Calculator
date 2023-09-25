'use strict';

import mongoose, { Document } from 'mongoose'

const multiplierColors = ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey", "White", "Gold", "Silver"];
const toleranceColors = ["Brown", "Red", "Gold", "Silver"];

type MultiplierColors = typeof multiplierColors;
type ToleranceColors = typeof multiplierColors;

interface IExtraColors {
  name: string;
  values: {
    multipliers: MultiplierColors;
    tolerance: ToleranceColors;
  }
}

interface ColorsDoc extends Document {
  name: string;
  values: {
    multipliers: MultiplierColors;
    tolerance: ToleranceColors;
  }
}

interface ColorsModelInterface extends mongoose.Model<ColorsDoc> {
  build(attr: IExtraColors): ColorsDoc
}

const ColorsSchema = new mongoose.Schema({
  values: {
    type: Object,
    required: true
  }
})

ColorsSchema.statics.build = (attr: IExtraColors) => {
  return new Colors(attr)
}

const Colors = mongoose.model<ColorsDoc, ColorsModelInterface>('Colors', ColorsSchema);

Colors.build({
  name: 'extraColors',
  values: {
    multipliers: multiplierColors,
    tolerance: toleranceColors
  }
})

export { Colors };




