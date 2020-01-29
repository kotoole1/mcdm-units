import { DropdownOption } from '@/components/dropdownOption';

export interface Equipment extends DropdownOption {
  name: string;
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
}

export const EquipmentOptions: {[key: string]: Equipment} = {
  LIGHT: {
    name: 'Light',
    attack: 0,
    power: 1,
    defense: 1,
    toughness: 0,
    morale: 0,
  },
  MEDIUM: {
    name: 'Medium',
    attack: 0,
    power: 2,
    defense: 2,
    toughness: 0,
    morale: 0,
  },
  HEAVY: {
    name: 'Heavy',
    attack: 0,
    power: 4,
    defense: 4,
    toughness: 0,
    morale: 0,
  },
  SUPER_HEAVY: {
    name: 'Super-heavy',
    attack: 0,
    power: 6,
    defense: 6,
    toughness: 0,
    morale: 0,
  },
  BLANK: {
    name: '',
    dropdownName: 'Blank',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
  },
};
