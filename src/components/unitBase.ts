import {UnitModel} from '@/models/unitModel';
import {Ancestry, AncestryOptions} from '@/options/ancestry';
import {DomainOptions, Domain} from '@/options/domain';
import {Equipment, EquipmentOptions} from '@/options/equipment';
import {Experience, ExperienceOptions} from '@/options/experience';
import {Order, Orders} from '@/options/order';
import {Trait, Traits} from '@/options/trait';
import {UnitSize, UnitSizeOptions} from '@/options/unitSize';
import {UnitType, UnitTypeOptions} from '@/options/unitType';
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
    return this.ancestry.name + ' ' + this.experience.name;
  }

  protected get equipmentType() {
    let res = this.equipment.name;
    if (this.activeUnit.hasDomain) {
      res += ' ' + this.domain.name;
    }
    res += ' ' + this.unitType.name;
    return res;
  }

  protected get ancestry(): Ancestry {
    return AncestryOptions[this.activeUnit.ancestryId];
  }

  protected get equipment(): Equipment {
    return EquipmentOptions[this.activeUnit.equipmentId];
  }

  protected get experience(): Experience {
    return ExperienceOptions[this.activeUnit.experienceId];
  }

  protected get unitType(): UnitType {
    return UnitTypeOptions[this.activeUnit.unitTypeId];
  }

  protected get domain(): Domain {
    return DomainOptions[this.activeUnit.domainId];
  }

  protected get selectedSize(): UnitSize {
    return UnitSizeOptions[this.activeUnit.selectedSizeId];
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

  protected get traits(): Trait[] {
    const ret: Trait[] = [];
    if (this.activeUnit.traitIds) {
      this.activeUnit.traitIds.forEach((traitId) => ret.push(Traits[traitId]));
    }
    return ret;
  }

  protected get orders(): Order[] {
    const ret: Order[] = [];
    if (this.activeUnit.orderIds) {
      this.activeUnit.orderIds.forEach((orderId) => ret.push(Orders[orderId]));
    }
    return ret;
  }
}