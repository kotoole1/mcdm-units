<template>
  <div id="root-editor">
    <div v-if="selectedItemId"
         class="card-container">
      <UnitCard/>
      <UnitCardPng></UnitCardPng>
    </div>
    <UnitEditor v-if="selectedItemId"
                class="unit-editor-container"/>
    <ArmyEditor class="army-editor-container"/>
  </div>
</template>

<script lang="ts">
import {ArmyModel} from 'src/models/armyModel';
import {RootModel} from 'src/models/rootModel';
import {UnitModel} from 'src/models/unitModel';
import {createDefaultArmies, NO_ARMY_ID} from '../models/defaultRootModel';
import {removeIf} from '../models/utils';
import ArmyEditor from './armyEditor.vue';
import UnitCard from './unitCard.vue';
import UnitCardPng from './unitCardPng.vue';
import UnitEditor from './unitEditor.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    ArmyEditor,
    UnitCard,
    UnitEditor,
    UnitCardPng,
  },
})
export default class RootEditor extends Vue {
  public static initialState: RootModel | null = null; // should only be set once when the page loads, by
  // TODO: store selected unit here, have undo-redo introspect into its undo stack and to select the last changed unit

  // private selectUnit(unitId: string) {
  //   if (unitId === 'NEXT') {
  //     const oldIndex = this.$store.state.units.indexOf(this.activeUnitId);
  //     const newIndex = (oldIndex + 1) % this.$store.state.units.length;
  //     const newUnit: UnitModel = this.$store.state.units[newIndex];
  //     if (newUnit) {
  //       unitId = newUnit.id;
  //     }
  //   }
  //   this.activeUnitId = unitId;
  // }

  private get selectedItemId(): string {
    return this.$store.state.selectedItemId;
  }
}
</script>

<style scoped lang="less">
  #root-editor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 40px;
    width: 100%;
    height: calc(100vh - 40px);
  }
  .army-editor-container,
  .unit-editor-container,
  .card-container {
    position: absolute;
  }
  .army-editor-container {
    left: 0;
  }
  .unit-editor-container {
    left: @army-editor-width;
  }
  .card-container {
    left: @army-editor-width + @unit-editor-width;
    padding: 15px 0 0 25px;
  }
</style>
