import {ArmyModel} from '@/models/armyModel';
import {UnitModel} from '@/models/unitModel';

export class RootModel {
  // This is a cache for convenience. Source of truth is to look up
  public armies: ArmyModel[] = [];
  public units: UnitModel[] = [];
  public selectedItemId: string = '';
}
