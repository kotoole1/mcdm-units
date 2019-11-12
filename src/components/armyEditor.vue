<template>
  <div class="editor-panel army-editor-panel">
    <div class="title">Units</div>
    <ul>
      <li v-for="unit in allUnits"
          class="unit-line-item"
          :class="{ active: isActive(unit) }"
          @onclick="$emit('select-unit', unit.id)">{{unit.title}}</li>
    </ul>
    <button class="mdl-button">New Unit</button>
  </div>
</template>

<script lang="ts">
import {UnitModel} from 'src/models/unitModel';
import {Component, Vue, Prop} from "vue-property-decorator";

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
    console.log(unit);
    console.log(this.activeUnitId);
    return unit.id === this.activeUnitId;
  }
}
</script>

<style lang="less">
  .unit-line-item {
    list-style-type: none;

    &.active {
      background-color: aqua;
      margin: 0 -@editor-panel-padding 0 -@editor-panel-padding;
      padding: 2px @editor-panel-padding 2px @editor-panel-padding;
    }
  }
</style>
