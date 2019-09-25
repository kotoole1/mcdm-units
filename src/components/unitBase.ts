import {UnitModel} from '@/models/unitModel';
import {DomainOptions} from '@/options/domain';
import Component from 'vue-class-component';
import {Vue, Prop} from 'vue-property-decorator';

@Component({})
export class UnitBase extends Vue {
  // @Prop() protected model!: UnitModel;
  //
  // protected get ancestryExperience() {
  //   return this.model.ancestry.name + ' ' + this.model.experience.name;
  // }
  //
  // protected get equipmentType() {
  //   let res = this.model.equipment.name;
  //   if (this.model.domain !== DomainOptions.NONE) {
  //     res += ' ' + this.model.domain.name;
  //   }
  //   res += ' ' + this.model.unitType.name;
  //   return res;
  // }
  //
  // protected get attack(): string {
  //   return this.formatBonus(this.model.ancestry.attack +
  //     this.model.unitType.attack +
  //     this.model.experience.attack +
  //     this.model.domain.attack +
  //     this.model.equipment.attack);
  // }
  //
  // protected get power(): string {
  //   return this.formatBonus(this.model.ancestry.power +
  //     this.model.unitType.power +
  //     this.model.experience.power +
  //     this.model.domain.power +
  //     this.model.equipment.power);
  // }
  //
  // protected get defense(): string {
  //   return this.formatBonus(this.model.ancestry.defense +
  //     this.model.unitType.defense +
  //     this.model.experience.defense +
  //     this.model.domain.defense +
  //     this.model.equipment.defense);
  // }
  //
  // protected get toughness(): string {
  //   return this.formatBonus(this.model.ancestry.toughness +
  //     this.model.unitType.toughness +
  //     this.model.experience.toughness +
  //     this.model.domain.toughness +
  //     this.model.equipment.toughness);
  // }
  //
  // protected get morale(): string {
  //   return this.formatBonus(this.model.ancestry.morale +
  //     this.model.unitType.morale +
  //     this.model.experience.morale +
  //     this.model.domain.morale +
  //     this.model.equipment.morale);
  // }
  //
  // protected formatBonus(bonus: number): string {
  //   if (bonus >= 0) {
  //     return '+' + bonus;
  //   }
  //   return '' + bonus;
  // }
  //
  // protected get size(): string {
  //   return this.model.selectedSize.numberOfDice + 'd' + this.model.selectedSize.numberOfSides;
  // }

  // protected get traits(): Trait[] {
  //   const ret: Trait[] = [];
  //   if (this.model.traits) {
  //     ret.push.apply(ret, this.model.traits);
  //   }
  //   return ret;
  // }
}
