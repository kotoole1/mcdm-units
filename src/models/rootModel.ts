import {ArmyModel} from '@/models/armyModel';
import {UnitModel} from '@/models/unitModel';
import {Ancestry} from '@/options/ancestry';
import {Order} from '@/options/order';
import {Trait} from '@/options/trait';

export class RootModel {
  public version: number = RootModelVersionNumber.INITIAL_VERSION;
  public armies: ArmyModel[] = [];
  public units: UnitModel[] = [];
  public selectedItemId: string = '';

  // Your homebrew
  public homebrewAncestries: Ancestry[] = [];
  public homebrewTraits: Trait[] = [];
  public homebrewOrders: Order[] = [];
}

export enum RootModelVersionNumber {
  INITIAL_VERSION = 0,
}
