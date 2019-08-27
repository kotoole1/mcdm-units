export interface Trait {
  name: string;
  description: string;
}

export const Traits: {[key: string]: Trait } = {
  STERNER_STUFF: {
    name: 'Made of Sterner Stuff',
    description: 'Enemy battle magic has disadvantage on Power checks.',
  },
  ANGRY: {
    name: 'Now you made them angry',
    description: 'While diminished, this unit has advantage on attack checks. Enemy Power checks against this unit have disadvantage.',
  },
  HORRIFY: {
    name: 'Horrify',
    description: 'If this unit inflicts a casualty on an enemy unit, that unit must make a DC 15 morale check. Failure exhausts the unit.',
  },
  AMORPHOUS: {
    name: 'Amorphous',
    description: ' The legion can move into another unit, occupying its space and engaging that unit. As such, the legion can attack archers while enemy infantry is still on the field.',
  },
  STRENGTH_DRAIN: {
    name: 'Strength drain',
    description: 'If the legion inflicts a casualty on an engaged unit, that unit loses 1 Power. Lost Power regenerates the next day.',
  },
  LIFE_DRAIN: {
    name: 'Life drain',
    description: 'Successful Power checks exhaust enemy units.',
  },
  RAVENOUS: {
    name: 'Ravenous',
    description: 'While there is a diminished enemy unit, this unit can spend a round feeding on the corpses. Increment their casualty die.',
  },
  MINDLESS: {
    name: 'Mindless',
    description: 'Cannot fail morale checks.',
  },
  FRENZY: {
    name: 'Frenzy',
    description: 'If this unit diminishes an enemy unit, it immediately makes a free attack against that unit.',
  },
  COURAGEOUS: {
    name: 'Courageous',
    description: 'Once per battle, this unit can choose to succeed on a morale check it just failed.',
  },
  SAVAGE: {
    name: 'Savage',
    description: 'This unit has advantage on the first attack check it makes each battle.',
  },
  SHOCK_TROOPS: {
    name: 'Surprise attack',
    description: 'The first time this unit attacks each unit in battle, a successful power check deals two casualties.',
  },
  ETERNAL: {
    name: 'Eternal',
    description: 'This unit cannot be horrified, and it always succeeds on morale checks to attack undead and fiends.',
  },
};
