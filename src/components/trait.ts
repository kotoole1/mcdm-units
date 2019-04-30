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
    name: 'That Just Made Them Angry',
    description: 'While dimin- ished, this unit has advantage on attack checks. Enemy Power checks against this unit have disadvantage.',
  },
};
