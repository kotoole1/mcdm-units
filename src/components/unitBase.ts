import {ArmyModel} from '@/models/armyModel';
import {UnitModel} from '@/models/unitModel';
import {Ancestry, AncestryOptions} from '@/options/ancestry';
import {ColorOptions} from '@/options/color';
import {DomainOptions, Domain} from '@/options/domain';
import {Equipment, EquipmentOptions} from '@/options/equipment';
import {Experience, ExperienceOptions} from '@/options/experience';
import {Order, Orders} from '@/options/order';
import {Trait, Traits} from '@/options/trait';
import {UnitSize, UnitSizeOptions} from '@/options/unitSize';
import {UnitType, UnitTypeOptions} from '@/options/unitType';
import Component from 'vue-class-component';
import {Vue, Prop} from 'vue-property-decorator';
// import domtoimage from 'dom-to-image';
// import html2canvas from 'html2canvas';

@Component({})
export class UnitBase extends Vue {
  @Prop({ type: String, default: '' })
  public unitId!: string;

  protected mounted() {
    this.emitHeight();
    setTimeout(() => {
      this.emitHeight();
    }, 1000);
  }

  protected updated() {
    this.emitHeight();
    // Doesn't work, sadly =(
    // domtoimage.toPng(node)
    //   .then((dataUrl: string) => {
    //     const img = new Image();
    //     img.src = dataUrl;
    //     const target = document.getElementById('unit-card-png');
    //     if (target) {
    //       while (target.firstChild) {
    //         target.removeChild(target.firstChild);
    //       }
    //       target.appendChild(img);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Failed to convert HTML to PNG', error);
    //   });

    // if (node) {
    //   html2canvas(node).then((canvas: HTMLElement) => {
    //     const target = document.getElementById('unit-card-png');
    //     if (target) {
    //       target.appendChild(canvas);
    //     }
    //   });
    // }
  }

  protected emitHeight(): void {
    this.$emit('height', (<HTMLElement> this.$el).offsetHeight);
  }

  protected get activeUnit(): UnitModel {
    return this.$store.getters.unit(this.activeUnitId);
  }

  protected get activeUnitId(): string {
    if (this.unitId) {
      return this.unitId;
    }
    return this.$store.state.selectedItemId;
  }

  protected get bannerImage(): string {
    let backgroundAttribute: string = '';
    if (!this.imageUrl.match('/')) {
      try {
        backgroundAttribute = 'url(\'' + require('../assets/' + this.imageUrl ) + '\')';
      } catch (e) {
        // TODO: parameter error state
        backgroundAttribute = 'url(\'' + require('../assets/not-found.png' ) + '\')';
      }
    } else {
      try {
        backgroundAttribute = 'url(\'' + this.imageUrl + '\')';
      } catch (e) {
        // TODO: parameter error state
        backgroundAttribute = 'url(\'' + require('../assets/not-found.png' ) + '\')';
      }
    }
    return backgroundAttribute;
  }

  protected get hasCost(): boolean {
    return false;
  }

  protected get cost(): string {
    return '400gp';
  }

  /**
   * The css class for the selected color
   */
  protected get color(): string {
    if (this.activeUnit.owningArmyId) {
      const army: ArmyModel = this.$store.getters.army(this.activeUnit.owningArmyId);
      if (army) {
        return ColorOptions[army.colorId].cssClass;
      }
    }
    return ColorOptions.RED.cssClass;
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

  protected get sizeToDisplay(): string {
    return this.size.name;
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

  protected get size(): UnitSize {
    return UnitSizeOptions[this.activeUnit.unitSizeId];
  }

  protected get imageUrl(): string {
    return this.activeUnit.imageUrl;
  }

  protected get imageScale(): number {
    return this.activeUnit.imageScale;
  }

  protected get imageXPos(): number {
    return this.activeUnit.imageXPos;
  }

  protected get imageYPos(): number {
    return this.activeUnit.imageYPos;
  }

  protected get attack(): string {
    return this.formatBonus(this.ancestry.attack +
      this.unitType.attack +
      this.experience.attack +
      (this.activeUnit.hasDomain ? this.domain.attack : 0) +
      this.equipment.attack);
  }

  protected get power(): string {
    return this.formatBonus(this.ancestry.power +
      this.unitType.power +
      this.experience.power +
      (this.activeUnit.hasDomain ? this.domain.power : 0) +
      this.equipment.power);
  }

  protected get defense(): string {
    return this.formatBonus(this.ancestry.defense +
      this.unitType.defense +
      this.experience.defense +
      (this.activeUnit.hasDomain ? this.domain.defense : 0) +
      this.equipment.defense);
  }

  protected get toughness(): string {
    return this.formatBonus(this.ancestry.toughness +
      this.unitType.toughness +
      this.experience.toughness +
      (this.activeUnit.hasDomain ? this.domain.toughness : 0) +
      this.equipment.toughness);
  }

  protected get morale(): string {
    return this.formatBonus(this.ancestry.morale +
      this.unitType.morale +
      this.experience.morale +
      (this.activeUnit.hasDomain ? this.domain.morale : 0) +
      this.equipment.morale);
  }

  protected formatBonus(bonus: number): string {
    if (bonus >= 0) {
      return '+' + bonus;
    }
    return '' + bonus;
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
