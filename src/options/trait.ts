import {DropdownOption} from '@/components/dropdownOption';

export interface Trait extends DropdownOption {
  id?: string;
  name: string;
  description: string;
  cost?: number;
}

export const Traits: {[key: string]: Trait } = {
  STERNER_STUFF: {
    name: 'Made of Sterner Stuff',
    description: 'Enemy battle magic has disadvantage on Power checks.',
  },
  ANGRY: {
    name: 'That Just Made Them Angry',
    description: 'While diminished, this unit has advantage on attack checks. Enemy Power checks against this unit have disadvantage.',
  },
  AMORPHOUS: {
    name: 'Amorphous',
    description: ' The legion can move into another unit, occupying its space and engaging that unit. As such, the legion can attack archers while enemy infantry is still on the field.',
  },
  STRENGTH_DRAIN: {
    name: 'Strength Drain',
    description: 'If the legion inflicts a casualty on an engaged unit, that unit loses 1 Power. Lost Power regenerates the next day.',
  },
  LIFE_DRAIN: {
    name: 'Life Drain',
    description: 'Successful Power checks exhaust enemy units.',
  },
  SHOCK_TROOPS: {
    name: 'Surprise Attack',
    description: 'The first time this unit attacks in battle, a successful power check deals two casualties.',
  },
  AMPHIBIOUS: {
    name: 'Amphibious',
    description: 'This unit does not suffer terrain penalties for fighting in water or on land.',
    cost: 50,
  },
  BRED_FOR_WAR: {
    name: 'Bred For War',
    description: 'This unit cannot be diminished, and cannot have disadvantage on morale checks.',
    cost: 100,
  },
  BRUTAL: {
    name: 'Brutal',
    description: 'This unit inflicts 2 casualties on a successful power check.',
    cost: 200,
  },
  COURAGEOUS: {
    name: 'Courageous',
    description: 'Once per battle, this unit can choose to succeed on a morale check it just failed.',
    cost: 50,
  },
  ETERNAL: {
    name: 'Eternal',
    description: 'This unit cannot be horrified, and it always succeeds on morale checks to attack 50 undead and fiends.',
    cost: 50,
  },
  FRENZY: {
    name: 'Frenzy',
    description: 'If this unit diminishes an enemy unit, it immediately makes a free attack against that unit.',
    cost: 50,
  },
  HORRIFY: {
    name: 'Horrify',
    description: 'If this unit inflicts a casualty on an enemy unit, that unit must make a dc 15 morale 200 check. failure exhausts the unit.',
    cost: 200,
  },
  MARTIAL: {
    name: 'Martial',
    description: 'If this unit succeeds on a power check and its size is greater than the defending unit, it inflicts 2 casualties.',
    cost: 100,
  },
  MINDLESS: {
    name: 'Mindless',
    description: 'This unit cannot fail morale checks.',
    cost: 100,
  },
  REGENERATE: {
    name: 'Regenerate',
    description: 'When this unit refreshes, increment its casualty die. this trait ceases to function if the unit suffers a casualty from battle magic.',
    cost: 200,
  },
  RAVENOUS: {
    name: 'Ravenous',
    description: 'While any enemy unit is diminished, this unit can spend a round feeding on the corpses to increment their casualty die.',
    cost: 50,
  },
  HURL_ROCKS: {
    name: 'Hurl rocks',
    description: 'If this unit succeeds on an attack check, it inflicts 2 casualties. against fortifications, it inflicts 1d6 casualties.',
    cost: 250,
  },
  SAVAGE: {
    name: 'Savage',
      description: 'This unit has advantage on the first attack check it makes each battle.',
    cost: 50,
  },
  STALWART: {
    name: 'Stalwart',
      description: 'Enemy battle magic has disadvantage on power checks against this unit.',
    cost: 50,
  },
  TWISTING_ROOTS: {
    name: 'Twisting Roots',
    description: 'As an action, this unit can sap the walls of a fortification. siege units have advantage 200 on power checks against sapped fortifications.',
    cost: 200,
  },
  UNDEAD: {
    name: 'Undead',
    description: 'Green and regular troops must pass a morale check to attack this unit. each enemy unit need only do this once.',
    cost: 50,
  },
};
