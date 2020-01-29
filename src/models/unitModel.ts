import {OverrideStyle} from '@/options/override';
import { ItemModel } from './itemModel';

export class UnitModel extends ItemModel {
  public ancestryId: string = 'HUMAN';
  public experienceId: string = 'REGULAR';
  public equipmentId: string = 'MEDIUM';
  public hasDomain: boolean = false;
  public domainId: string = 'FLYING';
  public unitTypeId: string = 'INFANTRY';

  public overrideStyle = OverrideStyle.NONE; // TODOK

  public traitIds: string[] = [];
  public orderIds: string[] = [];
  public conditionIds: string[] = [];

  public unitSizeId: string = '_1D6';

  public hideCost: boolean = false; // `true` overrides global setting to show cost
  public hasAttitude: boolean = false;
  public attitudeId: string = 'ALLIED';

  constructor(id: string,
              owningArmyId: string) {
        super(id, owningArmyId);
    }
}
