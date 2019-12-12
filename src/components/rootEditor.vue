<template>
  <div id="root-editor">
    <div v-if="activeUnitId"
         class="card-container">
      <UnitCard :activeUnitId="activeUnitId"/>
    </div>
    <UnitEditor v-if="activeUnitId"
                class="unit-editor-container"
                :activeUnitId="activeUnitId"/>
    <ArmyEditor :activeUnitId="activeUnitId"
                @select-unit="selectUnit($event)"/>
  </div>
</template>

<script lang="ts">
import ArmyEditor from './armyEditor.vue';
import UnitCard from './unitCard.vue';
import UnitEditor from './unitEditor.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    ArmyEditor,
    UnitCard,
    UnitEditor,
  },
})
export default class RootEditor extends Vue {
  private activeUnitId = this.$store.state.units.length ? this.$store.state.units[0].id : '';

  public selectUnit(unitId: string) {
    this.activeUnitId = unitId;
  }
}
</script>

<style scoped lang="less">
  #root-editor {
    width: 100%;
    height: 100vh;
  }
  .army-editor-container,
  .unit-editor-container,
  .card-container {
    position: absolute;
  }
  .army-editor-container {

  }
  .unit-editor-container {
    left: @army-editor-width;
  }
  .card-container {
    left: @army-editor-width + @unit-editor-width;
    padding: 15px 0 0 25px;
  }
</style>
