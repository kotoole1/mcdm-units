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
    name: 'None (Ground)',
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
  },
};
