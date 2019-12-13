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
  <!--TODO: assign extra parameters dynamically-->
  <div class="editor-section" v-if="true">
    <label><b>Banner image</b></label>
    <NumberParameter :name="'Scale (%)'"
                     :value="activeUnit.imageScale"
                     :min="100"
                     :max="10000"
                     :step="10"
                     @input="setField('imageScale', $event)"></NumberParameter>
    <NumberParameter :name="'X position (%)'"
                     :value="activeUnit.imageXPos"
                     :min="0"
                     :max="100"
                     :step="5"
                     @input="setField('imageXPos', $event)"></NumberParameter>
    <NumberParameter :name="'Y position (%)'"
                     :value="activeUnit.imageYPos"
                     :min="0"
                     :max="100"
                     :step="5"
                     @input="setField('imageYPos', $event)"></NumberParameter>
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
import NumberParameter from './numberParameter.vue';

@Component({
  components: {
    NumberParameter,
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
}
</script>

<style lang="less">
  .param-line {
    display: flex;
  }
</style>
