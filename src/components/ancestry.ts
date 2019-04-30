import {Trait, Traits} from '@/components/trait';

export interface Ancestry {
  name: string;
  traits?: Trait[];
}

export const AncestryOptions: {[key: string]: Ancestry} = {
  DWARF: {
    name: 'Dwarf',
    traits: [
      Traits.ANGRY,
      Traits.STERNER_STUFF,
    ],
  },
};
