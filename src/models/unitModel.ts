import {Ancestry, AncestryOptions} from '@/options/ancestry';
import {Domain, DomainOptions} from '@/options/domain';
import {Equipment, EquipmentOptions} from '@/options/equipment';
import {Experience, ExperienceOptions} from '@/options/experience';
import {Order, Orders} from '@/options/order';
import {OverrideStyle} from '@/options/override';
import {Trait, Traits} from '@/options/trait';
import {UnitSize, UnitSizeOptions} from '@/options/unitSize';
import {UnitType, UnitTypeOptions} from '@/options/unitType';

export class UnitModel {

  // protected title: string = 'IRONHEART DEFENDERS';
  // protected ancestry: Ancestry = AncestryOptions.DWARF;
  // protected experience: Experience = ExperienceOptions.SEASONED;
  // protected equipment: Equipment = EquipmentOptions.MEDIUM;
  // protected domain: Domain = Domains.FLYING;
  // protected unitType: UnitType = UnitTypeOptions.INFANTRY;
  // protected orders: Order[] = [ Orders.STAND_YOUR_GROUND ];

  public title: string = 'Nadia\'s Thunder';
  public ancestry: Ancestry = AncestryOptions.DRAGON;
  public experience: Experience = ExperienceOptions.VETERAN;
  public equipment: Equipment = EquipmentOptions.LIGHT;
  public domain: Domain = DomainOptions.FLYING;
  public unitType: UnitType = UnitTypeOptions.CAVALRY;

  public overrideStyle = OverrideStyle.NONE;
  public traits: Trait[] = [ Traits.COURAGEOUS ];
  public orders: Order[] = [ Orders.CHARGE_BRIEF ];

  public selectedSize: UnitSize = UnitSizeOptions._1D4;

  constructor(public id: string) {}
}
