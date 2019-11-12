<template>
<div class="editor-panel unit-editor-panel">
  <div class="title">{{title}}</div>
  <input v-model="title">
  <DropdownParameter :name="'Ancestry'"
                     :alphabetical="true"
                     :value=activeUnit.ancestryId
                     :options="AncestryOptions"
                     @input="setField('ancestryId', $event)"></DropdownParameter>
  <DropdownParameter :name="'Experience'"
                     :value=activeUnit.experienceId
                     :options="ExperienceOptions"
                     @input="setField('experienceId', $event)"></DropdownParameter>
  <DropdownParameter :name="'Equipment'"
                     :value=activeUnit.equipmentId
                     :options="EquipmentOptions"
                     @input="setField('equipmentId', $event)"></DropdownParameter>
  <DropdownParameter :name="'Type'"
                     :value=activeUnit.unitTypeId
                     :options="UnitTypeOptions"
                     @input="setField('unitTypeId', $event)"></DropdownParameter>
  <div class="param-line">
    <BooleanParameter :name="'Domain'"
                      :value="activeUnit.hasDomain"
                      @input="setField('hasDomain', $event)"></BooleanParameter>
    <DropdownParameter v-if="activeUnit.hasDomain"
                       :inline="true"
                       :value="activeUnit.domainId"
                       :options="DomainOptions"
                       @input="setField('domainId', $event)"></DropdownParameter>
  </div>
</div>
</template>

<script lang="ts">
import 'vue-select/dist/vue-select.css';
import {UnitModel} from 'src/models/unitModel';
import {Ancestry, AncestryOptions} from '@/options/ancestry';
import {Equipment, EquipmentOptions} from '@/options/equipment';
import {Experience, ExperienceOptions} from '@/options/experience';
import {UnitType, UnitTypeOptions} from '@/options/unitType';
import {UnitSize, UnitSizeOptions} from '@/options/unitSize';
import {Domain, DomainOptions} from '@/options/domain';
import {Component, Prop, Vue} from 'vue-property-decorator';
import DropdownParameter from './dropdownParameter.vue';
import BooleanParameter from './booleanParameter.vue';

@Component({
  components: {
    DropdownParameter,
    BooleanParameter,
  },
  data: () => {
    return {
      AncestryOptions,
      EquipmentOptions,
      ExperienceOptions,
      UnitTypeOptions,
      DomainOptions,
    };
  },
})
export default class UnitEditor extends Vue {
  @Prop(String)
  public activeUnitId!: string;

  protected get activeUnit(): UnitModel {
    return this.$store.getters.unit(this.activeUnitId);
  }

  public setField(field: keyof UnitModel, value: any) {
    this.$store.commit('changeUnitField', { unitId: this.activeUnitId, field, value });
  }

  get title() {
    return this.$store.getters.unit(this.activeUnitId).title;
  }

  set title(title: string) {
    this.$store.commit('changeTitle', { id: this.activeUnitId, title });
  }

  public setAncestry(ancestryId: string) {
    this.$store.commit('changeAncestry', { id: this.activeUnitId, ancestryId });
  }


  public setEquipment(equipmentId: string) {
    this.$store.commit('changeEquipment', { id: this.activeUnitId, equipmentId });
  }

  public setExperience(experienceId: string) {
    this.$store.commit('changeExperience', { id: this.activeUnitId, experienceId });
  }

  public setUnitType(unitTypeId: string) {
    this.$store.commit('changeUnitType', { id: this.activeUnitId, experienceId: unitTypeId });
  }

  public setHasDomain(hasDomain: boolean) {
    // this.$store.commit(
  }
}
</script>

<style lang="less">
  .param-line {
    display: flex;
  }
</style>
