export interface Domain {
  name: string;
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
}

export const DomainOptions: {[key: string]: Domain} = {
  FLYING: {
    name: 'Flying',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 3,
  },
  NONE: {
    name: '',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
  },
  BURROWING: {
    name: 'Burrowing',
    attack: 3,
    power: 0,
    defense: 3,
    toughness: 0,
    morale: 0,
  },
};
