import {DropdownOption} from '@/components/dropdownOption';
import {Trait, Traits} from '@/options/trait';
import {UnitType, UnitTypeOptions} from '@/options/unitType';

export interface Ancestry extends DropdownOption {
  name: string;
  title?: string;
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
  traits?: Trait[];
  forcedTypes?: UnitType[];
}

export const AncestryOptions: {[key: string]: Ancestry} = {
  DRAGON: {
    name: 'Dragon',
    attack: 1, power: 4, defense: 0, toughness: 0, morale: 2,
    traits: [],
  },
  BUGBEAR: {
    name: 'Bugbear',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: [ Traits.MARTIAL ],
  },
  DRAGONBORN: {
    name: 'Dragonborn',
    attack: 2,
    power: 2,
    defense: 1,
    toughness: 1,
    morale: 1,
    traits: [ Traits.COURAGEOUS ],
  },
  DWARF: {
    name: 'Dwarf',
    attack: 3,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traits: [ Traits.STALWART ],
  },
  ELF : {
    name: 'Elf ',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: [ Traits.ETERNAL ],
  },
  ELF_WINGED: {
    name: 'Elf (winged)',
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: [ Traits.ETERNAL ],
  },
  GHOUL: {
    name: 'Ghoul',
    attack: -1,
    power: 0,
    defense: 2 ,
    toughness: 2,
    morale: 0,
    traits: [ Traits.UNDEAD, Traits.HORRIFY, Traits.RAVENOUS ],
  },
  GNOLL: {
    name: 'Gnoll',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: [ Traits.FRENZY ],
  },
  GNOME : {
    name: 'Gnome ',
    attack: 1,
    power: -1,
    defense: 1,
    toughness: -1 ,
    morale: 1,
    traits: [],
  },
  GOBLIN: {
    name: 'Goblin',
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: 0,
    traits: [],
},
  HOBGOBLIN : {
    name: 'Hobgoblin',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0 ,
    morale: 1,
    traits: [ Traits.BRED_FOR_WAR, Traits.MARTIAL ],
  },
  HUMAN: {
    name: 'Human',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: [ Traits.COURAGEOUS ],
  },
  KOBOLD: {
    name: 'Kobold',
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: -1,
    traits: [],
  },
  LIZARDFOLK: {
    name: 'Lizardfolk',
    attack: 2,
    power: 1,
    defense: -1,
    toughness: 1,
    morale: 1,
    traits: [ Traits.AMPHIBIOUS ],
  },
  RAZORFIEND: {
    name: 'Razorfiend',
    attack: 2,
    power: 1,
    defense: -1,
    toughness: 1,
    morale: 1,
  },
  OGRE: {
    name: 'Ogre',
    attack: 0 ,
    power: 2,
    defense: 0 ,
    toughness: 2 ,
    morale: 1,
    traits: [ Traits.BRUTAL ],
  },
  ORC: {
    name: 'Orc',
    attack: 2,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traits: [ Traits.SAVAGE ],
  },
  SKELETON: {
    name: 'Skeleton',
    attack: -2,
    power: -1,
    defense: 1 ,
    toughness: 1 ,
    morale: 1,
    traits: [ Traits.UNDEAD, Traits.MINDLESS ],
  },
  TREANT: {
    name: 'Treant',
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 0,
    traits: [ Traits.TWISTING_ROOTS, Traits.HURL_ROCKS ],
    forcedTypes: [ UnitTypeOptions.SEIGE_ENGINE ],
  },
  TROLL: {
    name: 'Troll',
    attack: 0 ,
    power: 2,
    defense: 0 ,
    toughness: 2,
    morale: 0,
    traits: [ Traits.REGENERATE ],
  },
  ZOMBIE: {
    name: 'Zombie',
    attack: -2,
    power: 0,
    defense: 2,
    toughness: 2,
    morale: 2,
    traits: [ Traits.UNDEAD, Traits.MINDLESS ],
  },
};
