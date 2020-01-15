import {DropdownOption} from '@/components/dropdownOption';

export interface Domain extends DropdownOption {
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
  costMultiplier: number;
}

export const DomainOptions: {[key: string]: Domain} = {
  FLYING: {
    name: 'Flying',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 3,
    costMultiplier: 2,
  },
  NONE: {
    name: 'Ground',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
    costMultiplier: 1,
  },
  BURROWING: {
    name: 'Burrowing',
    attack: 3,
    power: 0,
    defense: 3,
    toughness: 0,
    morale: 0,
    costMultiplier: 2,
  },
};
