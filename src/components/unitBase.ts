import {AncestryOptions, Ancestry} from '@/components/ancestry';
import {Domain, DomainOptions} from '@/components/domain';
import {EquipmentOptions, Equipment} from '@/components/equipment';
import {ExperienceOptions, Experience} from '@/components/experience';
import {Order, Orders} from '@/components/order';
import {OverrideStyle} from '@/components/override';
import {Trait, Traits} from '@/components/trait';
import {UnitSize, UnitSizeOptions} from '@/components/unitSize';
import {UnitTypeOptions, UnitType} from '@/components/unitType';
import Component from 'vue-class-component';
import {Vue} from 'vue-property-decorator';

@Component({})
export class UnitBase extends Vue {
  // protected title: string = 'IRONHEART DEFENDERS';
  // protected ancestry: Ancestry = AncestryOptions.DWARF;
  // protected experience: Experience = ExperienceOptions.SEASONED;
  // protected equipment: Equipment = EquipmentOptions.MEDIUM;
  // protected domain: Domain = Domains.FLYING;
  // protected unitType: UnitType = UnitTypeOptions.INFANTRY;
  // protected orders: Order[] = [ Orders.STAND_YOUR_GROUND ];
  protected title: string = 'Nadia\'s Thunder';
  protected ancestry: Ancestry = AncestryOptions.DRAGON;
  protected experience: Experience = ExperienceOptions.VETERAN;
  protected equipment: Equipment = EquipmentOptions.LIGHT;
  protected domain: Domain = DomainOptions.FLYING;
  protected unitType: UnitType = UnitTypeOptions.CAVALRY;

  protected overrideStyle = OverrideStyle.NONE;
  protected traits: Trait[] = [ Traits.COURAGEOUS ];
  protected orders: Order[] = [ Orders.CHARGE_BRIEF ];

  protected selectedSize: UnitSize = UnitSizeOptions._1D4;

  protected get ancestryExperience() {
    return this.ancestry.name + ' ' + this.experience.name;
  }

  protected get equipmentType() {
    let res = this.equipment.name;
    if (this.domain !== DomainOptions.NONE) {
      res += ' ' + this.domain.name;
    }
    res += ' ' + this.unitType.name;
    return res;
  }

  protected get attack(): string {
    return this.formatBonus(this.ancestry.attack +
      this.unitType.attack +
      this.experience.attack +
      this.domain.attack +
      this.equipment.attack);
  }

  protected get power(): string {
    return this.formatBonus(this.ancestry.power +
      this.unitType.power +
      this.experience.power +
      this.domain.power +
      this.equipment.power);
  }

  protected get defense(): string {
    return this.formatBonus(this.ancestry.defense +
      this.unitType.defense +
      this.experience.defense +
      this.domain.defense +
      this.equipment.defense);
  }

  protected get toughness(): string {
    return this.formatBonus(this.ancestry.toughness +
      this.unitType.toughness +
      this.experience.toughness +
      this.domain.toughness +
      this.equipment.toughness);
  }

  protected get morale(): string {
    return this.formatBonus(this.ancestry.morale +
      this.unitType.morale +
      this.experience.morale +
      this.domain.morale +
      this.equipment.morale);
  }

  protected formatBonus(bonus: number): string {
    if (bonus >= 0) {
      return '+' + bonus;
    }
    return '' + bonus;
  }

  protected get size(): string {
    return this.selectedSize.numberOfDice + 'd' + this.selectedSize.numberOfSides;
  }

  // protected get traits(): Trait[] {
  //   const ret: Trait[] = [];
  //   if (this.traits) {
  //     ret.push.apply(ret, this.traits);
  //   }
  //   return ret;
  // }
}
