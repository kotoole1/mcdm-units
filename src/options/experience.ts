import { DropdownOption } from '@/components/dropdownOption';

export interface Experience extends DropdownOption {
  name: string;
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
}

export const ExperienceOptions: {[key: string]: Experience} = {
  GREEN: {
    name: 'Green',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
  },
  REGULAR: {
    name: 'Regular',
    attack: 1,
    power: 0,
    defense: 0,
    toughness: 1,
    morale: 1,
  },
  SEASONED: {
    name: 'Seasoned',
    attack: 1,
    power: 0,
    defense: 0,
    toughness: 1,
    morale: 2,
  },
  VETERAN : {
    name: 'Veteran',
    attack:  1,
    power: 0,
    defense: 0,
    toughness: 1,
    morale: 3,
  },
  ELITE: {
    name: 'Elite',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 2,
    morale: 4,
  },
  SUPER_ELITE: {
    name: 'Super-elite',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 2,
    morale: 5,
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
