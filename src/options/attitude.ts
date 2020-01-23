import {Ancestry} from '@/options/ancestry';

export interface Attitude {
  name: string;
  costMultiplier: number;
}

export const AttitudeOptions: {[key: string]: Attitude} = {
  ALLIED: {
    name: 'Allied',
    costMultiplier: 1,
  },
  FRIENDLY: {
    name: 'Friendly',
    costMultiplier: 1.25,
  },
  NEUTRAL: {
    name: 'Neutral',
    costMultiplier: 1.5,
  },
};
