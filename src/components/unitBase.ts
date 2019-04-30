import {Ancestry, AncestryOptions} from '@/components/ancestry';
import {Equipment, EquipmentOptions} from '@/components/equipment';
import {Experience, ExperienceOptions} from '@/components/experience';
import {Trait} from '@/components/trait';
import {UnitType, UnitTypeOptions} from '@/components/unitType';
import Component from 'vue-class-component';
import {Vue} from 'vue-property-decorator';

@Component({})
export class UnitBase extends Vue {
  protected title: string = 'IRONHEART DEFENDERS';
  protected ancestry: Ancestry = AncestryOptions.DWARF;
  protected experience: Experience = ExperienceOptions.SEASONED;
  protected equipment: Equipment = EquipmentOptions.MEDIUM;
  protected unitType: UnitType = UnitTypeOptions.INFANTRY;

  protected get traits(): Trait[] {
    const ret: Trait[] = [];
    if (this.ancestry.traits) {
      ret.push.apply(ret, this.ancestry.traits);
    }
    return ret;
  }
}
