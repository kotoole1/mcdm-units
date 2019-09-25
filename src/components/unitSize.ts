
export interface UnitSize {
  numberOfDice: number;
  numberOfSides: number;
}

export const UnitSizeOptions: {[key: string]: UnitSize} = {
  _1D4: {
    numberOfDice: 1,
    numberOfSides: 4,
  },
  _1D6: {
    numberOfDice: 1,
    numberOfSides: 6,
  },
  _1D8: {
    numberOfDice: 1,
      numberOfSides: 8,
  },
  _1D12: {
    numberOfDice: 1,
    numberOfSides: 12,
  },
  _2D8: {
    numberOfDice: 2,
    numberOfSides: 8,
  },
  _2D12: {
    numberOfDice: 2,
    numberOfSides: 12,
  },
};
