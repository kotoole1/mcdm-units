import {UnitModel} from '@/models/unitModel';
import {DomainOptions} from '@/options/domain';
import {Order} from '@/options/order';
import {Trait} from '@/options/trait';
import Component from 'vue-class-component';
import {Vue, Prop} from 'vue-property-decorator';

@Component({})
export class UnitBase extends Vue {
  @Prop({ type: String, required: true })
  public activeUnitId!: string;

  protected get activeUnit(): UnitModel {
    return this.$store.getters.unit(this.activeUnitId);
  }

  protected get ancestryExperience() {
    return this.activeUnit.ancestry.name + ' ' + this.activeUnit.experience.name;
  }

  protected get equipmentType() {
    let res = this.activeUnit.equipment.name;
    if (this.activeUnit.domain !== DomainOptions.NONE) {
      res += ' ' + this.activeUnit.domain.name;
    }
    res += ' ' + this.activeUnit.unitType.name;
    return res;
  }

  protected get attack(): string {
    return this.formatBonus(this.activeUnit.ancestry.attack +
      this.activeUnit.unitType.attack +
      this.activeUnit.experience.attack +
      this.activeUnit.domain.attack +
      this.activeUnit.equipment.attack);
  }

  protected get power(): string {
    return this.formatBonus(this.activeUnit.ancestry.power +
      this.activeUnit.unitType.power +
      this.activeUnit.experience.power +
      this.activeUnit.domain.power +
      this.activeUnit.equipment.power);
  }

  protected get defense(): string {
    return this.formatBonus(this.activeUnit.ancestry.defense +
      this.activeUnit.unitType.defense +
      this.activeUnit.experience.defense +
      this.activeUnit.domain.defense +
      this.activeUnit.equipment.defense);
  }

  protected get toughness(): string {
    return this.formatBonus(this.activeUnit.ancestry.toughness +
      this.activeUnit.unitType.toughness +
      this.activeUnit.experience.toughness +
      this.activeUnit.domain.toughness +
      this.activeUnit.equipment.toughness);
  }

  protected get morale(): string {
    return this.formatBonus(this.activeUnit.ancestry.morale +
      this.activeUnit.unitType.morale +
      this.activeUnit.experience.morale +
      this.activeUnit.domain.morale +
      this.activeUnit.equipment.morale);
  }

  protected formatBonus(bonus: number): string {
    if (bonus >= 0) {
      return '+' + bonus;
    }
    return '' + bonus;
  }

  protected get size(): string {
    return this.activeUnit.selectedSize.numberOfDice + 'd' + this.activeUnit.selectedSize.numberOfSides;
  }

  protected get traits(): Trait[] {
    const ret: Trait[] = [];
    if (this.activeUnit.traits) {
      ret.push.apply(ret, this.activeUnit.traits);
    }
    return ret;
  }

  protected get orders(): Order[] {
    const ret: Order[] = [];
    if (this.activeUnit.orders) {
      ret.push.apply(ret, this.activeUnit.orders);
    }
    return ret;
  }
}
