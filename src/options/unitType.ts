import {DropdownOption} from '@/components/dropdownOption';

export interface UnitType extends DropdownOption {
  name: string;
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
  costMultiplier: number;
  orderIds?: string[];
}

export const UnitTypeOptions: {[key: string]: UnitType} = {
  FLYING: {
    name: 'Flying',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 3,
    costMultiplier: 2,
  },
  ARCHERS: {
    name: 'Archers',
    attack: 0,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 1,
    costMultiplier: 1.75,
  },
  CAVALRY: {
    name: 'Cavalry',
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 2,
    costMultiplier: 1.5,
    orderIds: [ 'CHARGE_BRIEF' ],
  },
  LEVIES: {
    name: 'Levies',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: -1,
    costMultiplier: 0.75,
  },
  INFANTRY: {
    name: 'Infantry',
    attack: 0,
    power: 0,
    defense: 1,
    toughness: 1,
    morale: 0,
    costMultiplier: 1,
  },
  SIEGE_ENGINE: {
    name: 'Siege engine',
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 1,
    morale: 0,
    costMultiplier: 1.5,
  },
  ITEM: {
    name: 'Physical spell',
    attack: 0,
    power: 0,
    defense: 5,
    toughness: 3,
    morale: 0,
    costMultiplier: 1,
  },
};
