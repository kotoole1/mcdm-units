<template>
  <div class="editor-panel homebrew-editor-panel">
    <i class="material-icons close-button"
       @click="$emit('close')">close</i>
    <div class="param-line">
      <LabIcon id="homebrew-editing-icon"
               :ref="'homebrewEditingIcon'"
               :width="25"/>
      <EditableTextParameter :value="item.name"
                             @input="setField('name', $event)"></EditableTextParameter>
    </div>
    <div v-if="itemType == HomebrewType.ANCESTRY">
      <NumberParameter :name="'Attack'"
                       :value="item.attack"
                       :min="-100"
                       :max="100"
                       @input="setField('attack', $event)"></NumberParameter>
      <NumberParameter :name="'Power'"
                       :value="item.power"
                       :min="-100"
                       :max="100"
                       @input="setField('power', $event)"></NumberParameter>
      <NumberParameter :name="'Defense'"
                       :value="item.defense"
                       :min="-100"
                       :max="100"
                       @input="setField('defense', $event)"></NumberParameter>
      <NumberParameter :name="'Toughness'"
                       :value="item.toughness"
                       :min="-100"
                       :max="100"
                       @input="setField('toughness', $event)"></NumberParameter>
      <NumberParameter :name="'Morale'"
                       :value="item.morale"
                       :min="-100"
                       :max="100"
                       @input="setField('morale', $event)"></NumberParameter>
      <MultiselectParameter :name="'Free Traits'"
                            :value="item.traitIds"
                            :options="Traits"
                            @input="setField('traitIds', $event)"></MultiselectParameter>
      <MultiselectParameter :name="'Free Orders'"
                            :value="item.orderIds"
                            :options="Orders"
                            @input="setField('orderIds', $event)"></MultiselectParameter>
    </div>
    <div class="btn-row">
      <div :class="['delete-btn', ...btnFlat('accent')]"
           @click="deleteItem()">
        <i class="material-icons">delete</i> Delete {{ item.name }}</div>
    </div>
    <div class="btn-row">
      <div :class="['confirm-btn', ...btn('colored')]"
           @click="$emit('close')">
        <i class="material-icons">done</i> Confirm changes</div>
    </div>
  </div>
</template>

<script lang="ts">
  import EditableTextParameter from '@/components/editableTextParameter.vue';
  import LabIcon from '@/components/lab-icon.vue';
  import MultiselectParameter from '@/components/multiselectParameter.vue';
  import {AncestryOptions} from '@/options/ancestry';
  import {AttitudeOptions} from '@/options/attitude';
  import {DomainOptions} from '@/options/domain';
  import {EquipmentOptions} from '@/options/equipment';
  import {ExperienceOptions} from '@/options/experience';
  import {getTypeName, HomebrewItem, HomebrewType} from '@/options/homebrew';
  import {Orders} from '@/options/order';
  import {Traits} from '@/options/trait';
  import {UnitSizeOptions} from '@/options/unitSize';
  import {UnitTypeOptions} from '@/options/unitType';
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import 'vue-select/dist/vue-select.css';
  import BooleanParameter from './booleanParameter.vue';
  import DropdownParameter from './dropdownParameter.vue';
  import NumberParameter from './numberParameter.vue';
  import StringParameter from './stringParameter.vue';

  @Component({
    components: {
      LabIcon,
      EditableTextParameter,
      MultiselectParameter,
      StringParameter,
      NumberParameter,
      DropdownParameter,
      BooleanParameter,
    },
    data: () => {
      return {
        HomebrewType,
        AncestryOptions,
        EquipmentOptions,
        ExperienceOptions,
        UnitTypeOptions,
        DomainOptions,
        UnitSizeOptions,
        AttitudeOptions,
        Traits,
        Orders,
      };
    },
  })
  export default class HomebrewItemEditor extends Vue {
    @Prop({type: String, required: true})
    protected itemId!: string;
    @Prop({type: Number, required: true})
    protected itemType!: HomebrewType;

    protected get item(): HomebrewItem {
      return this.$store.getters.homebrewItem(this.itemId, this.itemType);
    }

    protected get typeName(): string {
      return getTypeName(this.itemType);
    }

    public setField(field: keyof HomebrewItem, value: any) {
      this.$store.commit('changeHomebrewItemField', {
        itemId: this.itemId, itemType: this.itemType, field, value });
    }

    public deleteItem(): void {
      this.$store.commit('deleteItem', { id: this.itemId, type: this.itemType });
      // The previous line sets the current e.g. ancestry to e.g. human.
      // That needs to happen before the call below, which stops editing and refocuses
      // the dropdown, since otherwise focusing will put the current (just-deleted) option
      // in the search field
      this.$emit('editItem', {});
    }
  }
</script>
<style scoped src="../styles/material.indigo-red.min.css"></style>
<style scoped>
  .close-button {
    float: right;
    cursor: pointer;
    padding: 4px 4px 0 0;
  }

  .btn-row {
    display: flex;
    width: 100%;
  }

  #homebrew-editing-icon {
    margin-right: 5px;
  }
  .mu-btn {
    float: bottom;
    flex-grow: 1;
    margin: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
