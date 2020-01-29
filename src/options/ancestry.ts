import {DropdownOption} from '@/components/dropdownOption';
import {RootModel} from '@/models/rootModel';
import {OptionSource} from '@/options/optionSource';
import {Trait, Traits} from '@/options/trait';
import {UnitType, UnitTypeOptions} from '@/options/unitType';

export function getAllAncestries(state: RootModel): {[key: string]: Ancestry} {
  // TODO: homebrews from state
  return AncestryOptions;
}

export function getAncestry(state: RootModel, ancestryId: string): Ancestry {
  return getAllAncestries(state)[ancestryId];
}

export interface Ancestry extends DropdownOption {
  name: string;
  title?: string;
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
  traitIds?: string[];
  orderIds?: string[];
  forcedTypes?: UnitType[]; // TODO
  source?: OptionSource;
}

export const AncestryOptions: {[key: string]: Ancestry} = {
  DIRE_BAT: {
    name: 'Dire bat',
    attack: -1, power: -1, defense: 0, toughness: 0, morale: -1,
    source: OptionSource.HOMEBREW,
  },
  DRAGON: {
    name: 'Dragon',
    attack: 1, power: 4, defense: 0, toughness: 0, morale: 2,
    traitIds: [],
    source: OptionSource.HOMEBREW,
  },
  BUGBEAR: {
    name: 'Bugbear',
    attack: 6,
    power: 6,
    defense: -2,
    toughness: -2,
    morale: 1,
    traitIds: [ 'MARTIAL' ],
  },
  DRAGONBORN: {
    name: 'Dragonborn',
    attack: 2,
    power: 2,
    defense: 1,
    toughness: 1,
    morale: 1,
    traitIds: [ 'COURAGEOUS' ],
  },
  DWARF: {
    name: 'Dwarf',
    attack: 5,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traitIds: [ 'STALWART' ],
  },
  EAGLE: {
    name: 'Eagle',
    attack: 5,
    power: 3,
    defense: -1,
    toughness: -1,
    morale: 1,
    source: OptionSource.HOMEBREW,
  },
  ELF : {
    name: 'Elf ',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traitIds: [ 'ETERNAL' ],
  },
  ELF_WINGED: {
    name: 'Elf (winged)',
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 1,
    traitIds: [ 'ETERNAL' ],
  },
  GHOUL: {
    name: 'Ghoul',
    attack: -1,
    power: 0,
    defense: 2 ,
    toughness: 2,
    morale: 0,
    traitIds: [ 'UNDEAD', 'HORRIFY', 'RAVENOUS' ],
  },
  GNOLL: {
    name: 'Gnoll',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traitIds: [ 'FRENZY' ],
  },
  GNOME : {
    name: 'Gnome ',
    attack: 1,
    power: -1,
    defense: 1,
    toughness: -1 ,
    morale: 1,
  },
  GOBLIN: {
    name: 'Goblin',
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: 0,
  },
  HARPY: {
    name: 'Harpy',
    attack: 2,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 0,
    traitIds: [],
    orderIds: ['CAPTIVATE'],
    source: OptionSource.HOMEBREW,
  },
  HIPPOGRIFF: {
    name: 'Hippogriff',
    attack: 1,
    power: 1,
    defense: 3,
    toughness: 4,
    morale: 2,
    source: OptionSource.HOMEBREW,
  },
  HOBGOBLIN : {
    name: 'Hobgoblin',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0 ,
    morale: 1,
    traitIds: [ 'BRED_FOR_WAR', 'MARTIAL' ],
  },
  HUMAN: {
    name: 'Human',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traitIds: [ 'COURAGEOUS' ],
  },
  KOBOLD: {
    name: 'Kobold',
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: -1,
    traitIds: [],
  },
  LIZARDFOLK: {
    name: 'Lizardfolk',
    attack: 2,
    power: 1,
    defense: -1,
    toughness: 1,
    morale: 1,
    traitIds: [ 'AMPHIBIOUS' ],
  },
  RAZORFIEND: {
    name: 'Razorfiend',
    attack: 2,
    power: 1,
    defense: -1,
    toughness: 1,
    morale: 1,
    source: OptionSource.HOMEBREW,
  },
  OGRE: {
    name: 'Ogre',
    attack: 0 ,
    power: 2,
    defense: 0 ,
    toughness: 2 ,
    morale: 1,
    traitIds: [ 'BRUTAL' ],
  },
  ORC: {
    name: 'Orc',
    attack: 2,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traitIds: [ 'SAVAGE' ],
  },
  ROC: {
    name: 'Roc',
    attack: 0 ,
    power: 2,
    defense: 0 ,
    toughness: 2 ,
    morale: 1,
    traitIds: [ 'BRUTAL' ],
    source: OptionSource.HOMEBREW,
  },
  SKELETON: {
    name: 'Skeleton',
    attack: -2,
    power: -1,
    defense: 1 ,
    toughness: 1 ,
    morale: 1,
    traitIds: [ 'UNDEAD', 'MINDLESS' ],
  },
  TARRASQUE: {
    name: 'Tarrasque',
    attack: 6,
    power: 15,
    defense: 4,
    toughness: 15,
    morale: 0,
    traitIds: [],
    forcedTypes: [ UnitTypeOptions.INFANTRY ],
    source: OptionSource.HOMEBREW,
  },
  TREANT: {
    name: 'Treant',
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 0,
    traitIds: [ 'TWISTING_ROOTS', 'HURL_ROCKS' ],
    forcedTypes: [ UnitTypeOptions.SEIGE_ENGINE ],
  },
  TROLL: {
    name: 'Troll',
    attack: 0 ,
    power: 2,
    defense: 0 ,
    toughness: 2,
    morale: 0,
    traitIds: [ 'REGENERATE' ],
  },
  ZOMBIE: {
    name: 'Zombie',
    attack: -2,
    power: 0,
    defense: 2,
    toughness: 2,
    morale: 2,
    traitIds: [ 'UNDEAD', 'MINDLESS' ],
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
