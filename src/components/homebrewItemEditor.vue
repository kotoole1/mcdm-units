<template>
  <div class="editor-panel homebrew-editor-panel">
    <i class="material-icons close-button"
       @click="$emit('close')">close</i>
    <EditableTextParameter :value="item.name"
                           @input="setField('name', $event)"></EditableTextParameter>
    <StringParameter :name="'Name'"
                     :value="item.name"
                     @input="setField('name', $event)"></StringParameter>
    <div class="editor-section" v-if="itemType == HomebrewType.ANCESTRY">
      <NumberParameter :name="'attack'"
                       :value="item.attack"
                       :min="-100"
                       :max="100"
                       @input="setField('attack', $event)"></NumberParameter>
      <NumberParameter :name="'power'"
                       :value="item.power"
                       :min="-100"
                       :max="100"
                       @input="setField('power', $event)"></NumberParameter>
      <NumberParameter :name="'defense'"
                       :value="item.defense"
                       :min="-100"
                       :max="100"
                       @input="setField('defense', $event)"></NumberParameter>
      <NumberParameter :name="'toughness'"
                       :value="item.toughness"
                       :min="-100"
                       :max="100"
                       @input="setField('toughness', $event)"></NumberParameter>
      <NumberParameter :name="'morale'"
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
    <div class="bottom-buttons">
      <div :class="['delete-btn', ...btn('accent')]"
           @click="deleteItem()">
        <i class="material-icons">delete</i> Delete {{ item.name }} {{ typeName }}</div>
      <div :class="['confirm-btn', ...btn('colored')]"
           @click="$emit('close')">
        <i class="material-icons">done</i> Confirm changes {{ typeName }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import EditableTextParameter from '@/components/editableTextParameter.vue';
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

  .delete-btn {
    float: right;
  }
</style>
