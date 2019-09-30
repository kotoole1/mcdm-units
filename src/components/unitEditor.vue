<template>
<div class="editor-panel unit-editor-panel">
  <div class="title">Unit 1</div>
  <input v-model="title">
  <DropdownParameter :options="ancestryOptions"></DropdownParameter>
</div>
</template>

<script lang="ts">
import {UnitModel} from 'src/models/unitModel';
import {AncestryOptions} from '@/options/ancestry';
import {Component, Prop} from 'vue-property-decorator';
import DropdownParameter from './dropdownParameter.vue';
import {Vue} from 'vue-property-decorator';

@Component({
  components: {
    DropdownParameter,
  },
})
export default class UnitEditor extends Vue {
  @Prop(String)
  public activeUnitId!: string;

  protected get activeUnit(): UnitModel {
    return this.$store.getters.unit(this.activeUnitId);
  }

  get ancestryOptions() {
    console.log('options: ' + JSON.stringify(Object.values(AncestryOptions)));
    return Object.values(AncestryOptions);
  }

  get title() {
    return this.$store.getters.unit(this.activeUnitId).title;
  }

  set title(title: string) {
    this.$store.commit('changeTitle', { id: this.activeUnitId, title });
  }
}
</script>
