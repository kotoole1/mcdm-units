import {UnitModel} from '@/models/unitModel';
import {ArmyModel} from './armyModel';

export const GOOD_GUYS_ID = 'GOOD_GUYS';
export const BAD_GUYS_ID = 'BAD_GUYS';
export const NO_ARMY_ID = 'NO_ARMY';

export function createDefaultArmies(): ArmyModel[] {
  return [
    new ArmyModel(GOOD_GUYS_ID, 'BLUE', 'Good guys'),
    new ArmyModel(BAD_GUYS_ID, 'RED', 'Bad guys'),
    new ArmyModel(NO_ARMY_ID, 'RED', 'Unassigned units'),
  ];
}

export function createDefaultUnits(): UnitModel[] {
  // For now, no units is fine. Eventually we want cool examples of nifty things.
  return [];
}
