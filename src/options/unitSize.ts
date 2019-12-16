import {DropdownOption} from '@/components/dropdownOption';

export interface UnitSize  extends DropdownOption {
  name: string;
  numberOfDice: number;
  numberOfSides: number;
}

export const UnitSizeOptions: {[key: string]: UnitSize} = {
  _1D2: {
    name: '1d2',
    numberOfDice: 1,
    numberOfSides: 2,
  },
  _1D3: {
    name: '1d3',
    numberOfDice: 1,
    numberOfSides: 3,
  },
  _1D4: {
    name: '1d4',
    numberOfDice: 1,
    numberOfSides: 4,
  },
  _1D6: {
    name: '1d6',
    numberOfDice: 1,
    numberOfSides: 6,
  },
  _1D8: {
    name: '1d8',
    numberOfDice: 1,
    numberOfSides: 8,
  },
  _1D10: {
    name: '1d10',
    numberOfDice: 1,
    numberOfSides: 10,
  },
  _1D12: {
    name: '1d12',
    numberOfDice: 1,
    numberOfSides: 12,
  },
  _2D8: {
    name: '2d8',
    numberOfDice: 2,
    numberOfSides: 8,
  },
  _2D10: {
    name: '2d10',
    numberOfDice: 2,
    numberOfSides: 10,
  },
  _2D12: {
    name: '2d12',
    numberOfDice: 2,
    numberOfSides: 12,
  },
};
