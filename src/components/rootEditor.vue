<template>
  <div id="root-editor">
    <div v-if="activeUnitId"
         class="card-container">
      <UnitCard :activeUnitId="activeUnitId"/>
      <UnitCardPng></UnitCardPng>
    </div>
    <UnitEditor v-if="activeUnitId"
                class="unit-editor-container"
                :activeUnitId="activeUnitId"
                @select-unit="selectUnit($event)"/>
    <ArmyEditor :activeUnitId="activeUnitId"
                class="army-editor-container"
                @select-unit="selectUnit($event)"/>
  </div>
</template>

<script lang="ts">
import {ArmyModel} from 'src/models/armyModel';
import {RootModel} from 'src/models/rootModel';
import {UnitModel} from 'src/models/unitModel';
import {createDefaultArmies, NO_ARMY_ID} from '../models/defaultRootModel';
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
  private activeUnitId = this.$store.state.units.length ? this.$store.state.units[0].id : '';
  public static initialState: RootModel | null = null; // should only be set once when the page loads, by

  private selectUnit(unitId: string) {
    if (unitId === 'NEXT') {
      const oldIndex = this.$store.state.units.indexOf(this.activeUnitId);
      const newIndex = (oldIndex + 1) % this.$store.state.units.length;
      const newUnit: UnitModel = this.$store.state.units[newIndex];
      if (newUnit) {
        unitId = newUnit.id;
      }
    }
    this.activeUnitId = unitId;
  }

  private mounted() {
    this.rectifyArmiesAndUnits();
  }

  public rectifyArmiesAndUnits(): void {
    if (!this.$store.state.armies || !this.$store.state.armies.length) {
      this.$store.commit('setArmies', {
        armies: createDefaultArmies(),
      });
    }
    const armies: ArmyModel[] = this.$store.getters.allArmies;
    const armiesById: {[key: string]: ArmyModel} = armies.reduce((indexed: {[key: string]: ArmyModel}, army) => {
      indexed[army.id] = army;
      return indexed;
    }, {});
    this.$store.getters.allUnits.forEach((unit: UnitModel) => {
      if (!unit.owningArmyId || !armiesById[unit.owningArmyId]) {
        unit.owningArmyId = NO_ARMY_ID;
      }
      if (!armiesById[unit.owningArmyId].unitIds.includes(unit.id)) {
        armiesById[unit.owningArmyId].unitIds.push(unit.id);
      }
    });
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
