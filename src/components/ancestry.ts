import {Trait, Traits} from '@/components/trait';

export interface Ancestry {
  name: string;
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  traits?: Trait[];
}

export const AncestryOptions: {[key: string]: Ancestry} = {
  DWARF: {
    name: 'Dwarf',
    attack: 3, power: 1, defense: 1, toughness: 1,
    traits: [
      Traits.STERNER_STUFF,
      Traits.ANGRY,
    ],
  },
  ELF: {
    name: 'Elf',
    attack: 2, power: 0, defense: 0, toughness: 0,
    traits: [
      Traits.ETERNAL,
    ],
  },
};
