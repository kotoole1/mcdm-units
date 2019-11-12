<template>
  <div id="#root-editor">
    <div class="card-container">
      <UnitCard :activeUnitId="activeUnitId"/>
    </div>
    <UnitEditor class="unit-editor-container"
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
  private activeUnitId = this.$store.state.units[0].id;
}
</script>

<style scoped lang="less">
  #root-editor {
    width: 100%;
    height: 100%;
  }
  .unit-editor-container {
    /*position: relative;*/
    left: @army-editor-width;
    display: none;
  }
  .card-container {
    position: relative;
    left: @army-editor-width;// + @unit-editor-width;
    padding: 15px 0 0 25px;
  }
</style>
