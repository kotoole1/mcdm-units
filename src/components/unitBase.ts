import {UnitModel} from '@/models/unitModel';
import {DomainOptions} from '@/options/domain';
import Component from 'vue-class-component';
import {Vue, Prop} from 'vue-property-decorator';

@Component({})
export class UnitBase extends Vue {
  @Prop() protected value!: UnitModel;

  protected get ancestryExperience() {
    return this.value.ancestry.name + ' ' + this.value.experience.name;
  }

  protected get equipmentType() {
    let res = this.value.equipment.name;
    if (this.value.domain !== DomainOptions.NONE) {
      res += ' ' + this.value.domain.name;
    }
    res += ' ' + this.value.unitType.name;
    return res;
  }

  protected get attack(): string {
    return this.formatBonus(this.value.ancestry.attack +
      this.value.unitType.attack +
      this.value.experience.attack +
      this.value.domain.attack +
      this.value.equipment.attack);
  }

  protected get power(): string {
    return this.formatBonus(this.value.ancestry.power +
      this.value.unitType.power +
      this.value.experience.power +
      this.value.domain.power +
      this.value.equipment.power);
  }

  protected get defense(): string {
    return this.formatBonus(this.value.ancestry.defense +
      this.value.unitType.defense +
      this.value.experience.defense +
      this.value.domain.defense +
      this.value.equipment.defense);
  }

  protected get toughness(): string {
    return this.formatBonus(this.value.ancestry.toughness +
      this.value.unitType.toughness +
      this.value.experience.toughness +
      this.value.domain.toughness +
      this.value.equipment.toughness);
  }

  protected get morale(): string {
    return this.formatBonus(this.value.ancestry.morale +
      this.value.unitType.morale +
      this.value.experience.morale +
      this.value.domain.morale +
      this.value.equipment.morale);
  }

  protected formatBonus(bonus: number): string {
    if (bonus >= 0) {
      return '+' + bonus;
    }
    return '' + bonus;
  }

  protected get size(): string {
    return this.value.selectedSize.numberOfDice + 'd' + this.value.selectedSize.numberOfSides;
  }

  // protected get traits(): Trait[] {
  //   const ret: Trait[] = [];
  //   if (this.model.traits) {
  //     ret.push.apply(ret, this.model.traits);
  //   }
  //   return ret;
  // }
}
