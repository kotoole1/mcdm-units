import * as _ from 'lodash';

import {DropdownOption} from '@/components/dropdownOption';
import {RootModel} from '@/models/rootModel';
import {randomId} from '@/models/uuid';
import {OptionSource} from '@/options/optionSource';
import {UnitType, UnitTypeOptions} from '@/options/unitType';

export function getAllAncestries(state: RootModel): {[key: string]: Ancestry} {
  const allAncestries: {[key: string]: Ancestry} = {};
  _.forEach(AncestryOptions, (standardAncestry, id) => {
    allAncestries[id] = standardAncestry;
  });
  _.forEach(state.homebrewAncestries, (homebrewAncestry) => {
    allAncestries[homebrewAncestry.id] = homebrewAncestry;
  });
  return allAncestries;
}

export function getAncestry(state: RootModel, ancestryId: string): Ancestry | undefined {
  return AncestryOptions.find((ancestry) => {
    return ancestry.id === ancestryId;
  }) || state.homebrewAncestries.find((ancestry) => {
    return ancestry.id === ancestryId;
  });
}

export interface Ancestry extends DropdownOption {
  id: string;
  name: string;
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

export function newHomebrewAncestry(): Ancestry {
  const itemId = randomId();
  return {
    id: itemId,
    name: 'My new ancestry',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
    traitIds: [],
    orderIds: [],
    source: OptionSource.YOUR_HOMEBREW,
  };
}

export const AncestryOptions: Ancestry[] = [{
    id: 'DIRE_BAT',
    name: 'Dire bat',
    attack: -1, power: -1, defense: 0, toughness: 0, morale: -1,
    source: OptionSource.HOMEBREW,
  }, {
    id: 'DRAGON',
    name: 'Dragon',
    attack: 1, power: 4, defense: 0, toughness: 0, morale: 2,
    traitIds: [],
    source: OptionSource.HOMEBREW,
  }, {
    id: 'BUGBEAR',
    name: 'Bugbear',
    attack: 6,
    power: 6,
    defense: -2,
    toughness: -2,
    morale: 1,
    traitIds: [ 'MARTIAL' ],
  }, {
    id: 'DRAGONBORN',
    name: 'Dragonborn',
    attack: 2,
    power: 2,
    defense: 1,
    toughness: 1,
    morale: 1,
    traitIds: [ 'COURAGEOUS' ],
  }, {
    id: 'DWARF',
    name: 'Dwarf',
    attack: 5,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traitIds: [ 'STALWART' ],
  }, {
    id: 'EAGLE',
    name: 'Eagle',
    attack: 5,
    power: 3,
    defense: -1,
    toughness: -1,
    morale: 1,
    source: OptionSource.HOMEBREW,
  }, {
    id: 'ELF',
    name: 'Elf ',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traitIds: [ 'ETERNAL' ],
  }, {
    id : 'ELF_WINGED',
    name: 'Elf (winged)',
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 1,
    traitIds: [ 'ETERNAL' ],
  }, {
    id: 'GHOUL',
    name: 'Ghoul',
    attack: -1,
    power: 0,
    defense: 2 ,
    toughness: 2,
    morale: 0,
    traitIds: [ 'UNDEAD', 'HORRIFY', 'RAVENOUS' ],
  }, {
    id: 'GNOLL',
    name: 'Gnoll',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traitIds: [ 'FRENZY' ],
  }, {
    id: 'GNOME',
    name: 'Gnome ',
    attack: 1,
    power: -1,
    defense: 1,
    toughness: -1 ,
    morale: 1,
  }, {
    id: 'GOBLIN',
    name: 'Goblin',
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: 0,
  }, {
    id: 'HARPY',
    name: 'Harpy',
    attack: 2,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 0,
    traitIds: [],
    orderIds: ['CAPTIVATE'],
    source: OptionSource.HOMEBREW,
  }, {
    id: 'HIPPOGRIFF',
    name: 'Hippogriff',
    attack: 1,
    power: 1,
    defense: 3,
    toughness: 4,
    morale: 2,
    source: OptionSource.HOMEBREW,
  }, {
    id: 'HOBGOBLIN',
    name: 'Hobgoblin',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0 ,
    morale: 1,
    traitIds: [ 'BRED_FOR_WAR', 'MARTIAL' ],
  }, {
    id: 'HUMAN',
    name: 'Human',
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traitIds: [ 'COURAGEOUS' ],
  }, {
    id: 'KOBOLD',
    name: 'Kobold',
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: -1,
    traitIds: [],
  }, {
    id: 'LIZARDFOLK',
    name: 'Lizardfolk',
    attack: 2,
    power: 1,
    defense: -1,
    toughness: 1,
    morale: 1,
    traitIds: [ 'AMPHIBIOUS' ],
  }, {
    id: 'RAZORFIEND',
    name: 'Razorfiend',
    attack: 2,
    power: 1,
    defense: -1,
    toughness: 1,
    morale: 1,
    source: OptionSource.HOMEBREW,
  }, {
    id: 'OGRE',
    name: 'Ogre',
    attack: 0 ,
    power: 2,
    defense: 0 ,
    toughness: 2 ,
    morale: 1,
    traitIds: [ 'BRUTAL' ],
  }, {
    id: 'ORC',
    name: 'Orc',
    attack: 2,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traitIds: [ 'SAVAGE' ],
  }, {
    id: 'ROC',
    name: 'Roc',
    attack: 0 ,
    power: 2,
    defense: 0 ,
    toughness: 2 ,
    morale: 1,
    traitIds: [ 'BRUTAL' ],
    source: OptionSource.HOMEBREW,
  }, {
    id: 'SKELETON',
    name: 'Skeleton',
    attack: -2,
    power: -1,
    defense: 1 ,
    toughness: 1 ,
    morale: 1,
    traitIds: [ 'UNDEAD', 'MINDLESS' ],
  }, {
    id: 'TARRASQUE',
    name: 'Tarrasque',
    attack: 6,
    power: 15,
    defense: 4,
    toughness: 15,
    morale: 0,
    traitIds: [],
    forcedTypes: [ UnitTypeOptions.INFANTRY ],
    source: OptionSource.HOMEBREW,
  }, {
    id: 'TREANT',
    name: 'Treant',
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 0,
    traitIds: [ 'TWISTING_ROOTS', 'HURL_ROCKS' ],
    forcedTypes: [ UnitTypeOptions.SEIGE_ENGINE ],
  }, {
    id: 'TROLL',
    name: 'Troll',
    attack: 0 ,
    power: 2,
    defense: 0 ,
    toughness: 2,
    morale: 0,
    traitIds: [ 'REGENERATE' ],
  }, {
    id: 'ZOMBIE',
    name: 'Zombie',
    attack: -2,
    power: 0,
    defense: 2,
    toughness: 2,
    morale: 2,
    traitIds: [ 'UNDEAD', 'MINDLESS' ],
  },
];
