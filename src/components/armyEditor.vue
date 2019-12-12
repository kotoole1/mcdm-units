<template>
  <div class="editor-panel army-editor-panel">
    <div class="title">Units</div>
    <ul>
      <li v-for="unit in allUnits"
          class="unit-line-item"
          :class="{ active: isActive(unit) }"
          @click="$emit('select-unit', unit.id)">{{unit.title}}</li>
    </ul>
    <button class="mdl-button"
            @click="newUnitClicked()">New Unit</button>
  </div>
</template>

<script lang="ts">
import {UnitModel} from '@/models/unitModel';
import {randomId} from '@/models/uuid';
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {},
  data: () => {
    return {};
  },
})
export default class UnitEditor extends Vue {
  @Prop(String)
  public activeUnitId!: string;

  public get allUnits(): UnitModel[] {
    return this.$store.getters.allUnits;
  }

  public isActive(unit: UnitModel) {
    return unit.id === this.activeUnitId;
  }

  public newUnitClicked() {
    const newUnit = new UnitModel(randomId());
    this.$store.commit('addUnit', { unit: newUnit } );
  }
}
</script>

<style lang="less">
  .unit-line-item {
    list-style-type: none;
    padding: 2px 0;

    &.active {
      background-color: aqua;
      margin: 0 -@editor-panel-padding 0 -@editor-panel-padding;
      padding-left: @editor-panel-padding;
      padding-right: @editor-panel-padding;
    }
  }
</style>
