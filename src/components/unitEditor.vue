<template>
<div class="editor-panel unit-editor-panel">
  <div class="title">{{activeUnit.title}}</div>
  <StringParameter :name="'Title'"
                   :value="activeUnit.title"
                   @input="setField('title', $event)"></StringParameter>
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
  <div class="param-line">
    <BooleanParameter :name="'Domain'"
                      :value="activeUnit.hasDomain"
                      @input="setField('hasDomain', $event)"></BooleanParameter>
    <DropdownParameter v-if="activeUnit.hasDomain"
                       :value="activeUnit.domainId"
                       :options="DomainOptions"
                       @input="setField('domainId', $event)"></DropdownParameter>
  </div>
  <DropdownParameter :name="'Type'"
                     :value=activeUnit.unitTypeId
                     :options="UnitTypeOptions"
                     @input="setField('unitTypeId', $event)"></DropdownParameter>
  <DropdownParameter :name="'Size'"
                     :value=activeUnit.unitSizeId
                     :options="UnitSizeOptions"
                     @input="setField('unitSizeId', $event)"></DropdownParameter>
  <MultiselectParameter :name="'Traits'"
                        :value="activeUnit.traitIds"
                        :options="Traits"
                        @input="setField('traitIds', $event)"></MultiselectParameter>
  <MultiselectParameter :name="'Orders'"
                        :value="activeUnit.orderIds"
                        :options="Orders"
                        @input="setField('orderIds', $event)"></MultiselectParameter>
  <MultiselectParameter :name="'Conditions'"
                        :value="activeUnit.conditionIds"
                        :options="Conditions"
                        @input="setField('conditionIds', $event)"></MultiselectParameter>
  <!--TODO: assign extra parameters dynamically-->
  <div class="editor-section" v-if="true">
    <label><b>Banner image</b></label>
    <StringParameter :name="'URL'"
                     :value="activeUnit.imageUrl"
                     @input="setField('imageUrl', $event)"></StringParameter>
    <NumberParameter :name="'Scale (%)'"
                     :value="activeUnit.imageScale"
                     :min="50"
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
  <div class="editor-section" v-if="true">
    <label><b>Cost</b></label>
    <BooleanParameter :name="'Hide cost'"
                      :value="activeUnit.hideCost"
                      @input="setField('hideCost', $event)"></BooleanParameter>
    <div class="param-line">
      <BooleanParameter :name="'Attitude'"
                        :value="activeUnit.hasAttitude"
                        @input="setField('hasAttitude', $event)"></BooleanParameter>
      <DropdownParameter v-if="activeUnit.hasAttitude"
                         :value="activeUnit.attitudeId"
                         :options="AttitudeOptions"
                         @input="setField('attitudeId', $event)"></DropdownParameter>
    </div>
  </div>
  <div class="bottom-buttons">
    <button @click="deleteUnit()">Delete unit</button>
  </div>
</div>
</template>

<script lang="ts">
import 'vue-select/dist/vue-select.css';
import MultiselectParameter from '@/components/multiselectParameter.vue';
import {UnitModel} from 'src/models/unitModel';
import {Ancestry, AncestryOptions} from '@/options/ancestry';
import {Equipment, EquipmentOptions} from '@/options/equipment';
import {Experience, ExperienceOptions} from '@/options/experience';
import {UnitType, UnitTypeOptions} from '@/options/unitType';
import {UnitSize, UnitSizeOptions} from '@/options/unitSize';
import {AttitudeOptions} from '@/options/attitude';
import {Traits} from '@/options/trait';
import {Orders} from '@/options/order';
import {Conditions} from '@/options/conditions';
import {Domain, DomainOptions} from '@/options/domain';
import {Component, Prop, Vue} from 'vue-property-decorator';
import DropdownParameter from './dropdownParameter.vue';
import BooleanParameter from './booleanParameter.vue';
import NumberParameter from './numberParameter.vue';
import StringParameter from './stringParameter.vue';

@Component({
  components: {
    MultiselectParameter,
    StringParameter,
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
      UnitSizeOptions,
      AttitudeOptions,
      Traits,
      Orders,
      Conditions,
    };
  },
})
export default class UnitEditor extends Vue {
  protected get activeUnitId(): string {
    return this.$store.state.selectedItemId;
  }

  protected get activeUnit(): UnitModel {
    return this.$store.getters.unit(this.activeUnitId);
  }

  public setField(field: keyof UnitModel, value: any) {
    this.$store.commit('changeUnitField', { unitId: this.activeUnitId, field, value });
  }

  public deleteUnit() {
    this.$emit('select-unit', 'NEXT');
    this.$store.commit('deleteUnit', { unitId: this.activeUnitId });
  }
}
</script>
<style scoped src="../styles/material.indigo-red.min.css">
</style>
