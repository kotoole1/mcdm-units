import {UnitModel} from '@/models/unitModel';

export class RootModel {
  public units: UnitModel[];

  constructor(unit: UnitModel) {
    this.units = [ unit ];
  }
}
