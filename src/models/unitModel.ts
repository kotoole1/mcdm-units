import {ExperienceOptions} from '@/options/experience';
import {OverrideStyle} from '@/options/override';

export class UnitModel {

  // protected title: string = 'IRONHEART DEFENDERS';
  // protected ancestry: Ancestry = AncestryOptions.DWARF;
  // protected experience: Experience = ExperienceOptions.SEASONED;
  // protected equipment: Equipment = EquipmentOptions.MEDIUM;
  // protected domain: Domain = Domains.FLYING;
  // protected unitType: UnitType = UnitTypeOptions.INFANTRY;
  // protected orders: Order[] = [ Orders.STAND_YOUR_GROUND ];

  public title: string = 'Greenspawn Razorfiends';
  public ancestryId: string = 'RAZORFIEND';
  public experienceId: string = 'GREEN';
  public equipmentId: string = 'MEDIUM';
  public hasDomain: boolean = true;
  public domainId: string = 'FLYING';
  public unitTypeId: string = 'INFANTRY';

  public overrideStyle = OverrideStyle.NONE;
  public traitIds: string[] = [ 'BRED_FOR_WAR' ];
  public orderIds: string[] = [ 'CHARGE_BRIEF' ];

  public selectedSizeId: string = '_1D6';

  constructor(public id: string) {}
}
