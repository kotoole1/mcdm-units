import {Order, Orders} from '@/components/order';
import {Trait, Traits} from '@/components/trait';
import Component from 'vue-class-component';
import {Vue} from 'vue-property-decorator';

@Component({})
export class UnitBase extends Vue {
  // protected title: string = 'IRONHEART DEFENDERS';
  // protected ancestry: Ancestry = AncestryOptions.DWARF;
  // protected experience: Experience = ExperienceOptions.SEASONED;
  // protected equipment: Equipment = EquipmentOptions.MEDIUM;
  // protected unitType: UnitType = UnitTypeOptions.INFANTRY;
  // protected orders: Order[] = [ Orders.STAND_YOUR_GROUND ];

  protected title1: string = '\u200b';
  protected title2: string = 'Nadia\'s Thunder';

  protected ancestryExpreience: string  = 'Dragon Veteran';
  protected equipmentType: string  = 'Light Flying Cavalry'; // '\u200b';

  protected traits: Trait[] = [ Traits.COURAGEOUS ];
  protected orders: Order[] = [ Orders.CHARGE ];

  protected attack: string = '+3';
  protected power: string = '+6';
  protected morale: string = '+1';
  protected defense: number = 12;
  protected toughness: number = 10;
  protected size: string = '1d4';

  // protected get traits(): Trait[] {
  //   const ret: Trait[] = [];
  //   if (this.traits) {
  //     ret.push.apply(ret, this.traits);
  //   }
  //   return ret;
  // }
}
