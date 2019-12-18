<template>
  <div class="editor-panel army-editor-panel">
    <div v-for="army in allArmies">
      <div class="title">{{ army.name }}</div>
      <ul>
        <li v-for="unitId in army.unitIds"
            class="unit-line-item"
            :class="{ active: isActive(unitId) }"
            @click="selectUnit(unitId)">
          <label>{{getUnit(unitId).title}}</label>
          <div v-for="armyButton in allArmies"
               v-if="army.id === NO_ARMY_ID && armyButton.id !== NO_ARMY_ID"
               class="add-to-army-button"
               :class="getColor(armyButton)"
               @click="addToArmy(unitId, armyButton.id)"
          ></div>
        </li>
      </ul>
      <button class="mdl-button"
              @click="newUnitClicked(army.id)">New Unit</button>
    </div>
  </div>
</template>

<script lang="ts">
import {UnitModel} from '@/models/unitModel';
import {randomId} from '@/models/uuid';
import {ArmyModel} from 'src/models/armyModel';
import {ColorOptions} from '@/options/color';
import {NO_ARMY_ID} from '@/models/defaultRootModel';
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {},
  data: () => {
    return {
      NO_ARMY_ID,
    };
  },
})
export default class UnitEditor extends Vue {
  @Prop(String)
  private activeUnitId!: string;

  private getUnit(unitId: string) {
    return this.$store.getters.unit(unitId);
  }

  private getColor(army: ArmyModel) {
    return ColorOptions[this.$store.getters.army(army.id).colorId].cssClass;
  }

  private selectUnit(unitId: string) {
    this.$emit('select-unit', unitId);
  }

  private get allUnits(): UnitModel[] {
    return this.$store.getters.allUnits;
  }

  private get allArmies(): ArmyModel[] {
    return this.$store.getters.allArmies;
  }

  private isActive(unitId: string) {
    return unitId === this.activeUnitId;
  }

  private newUnitClicked(owningArmyId: string) {
    const newUnit = new UnitModel(randomId(), owningArmyId);
    this.$store.commit('addUnit', { unit: newUnit } );
    this.selectUnit(newUnit.id);
  }

  private addToArmy(unitId: string, owningArmyId: string) {
    const originalUnit: UnitModel = this.$store.getters.unit(unitId);
    const newUnit = <UnitModel> Object.assign({}, originalUnit);
    newUnit.id = randomId();
    newUnit.owningArmyId = owningArmyId;
    this.$store.commit('addUnit', {
      unit: newUnit,
    });
    this.selectUnit(newUnit.id);
  }
}
</script>

<style lang="less">
  .unit-line-item {
    list-style-type: none;
    padding: 2px 0;
    display: flex;

    &.active {
      background-color: aqua;
      margin: 0 -@editor-panel-padding 0 -@editor-panel-padding;
      padding-left: @editor-panel-padding;
      padding-right: @editor-panel-padding;
    }

    label {
      margin-right: auto;
    }

    .add-to-army-button {
      width: 20px;
      height: 20px;
      align-self: center;
      margin: 0 2px;
      &.red-army { background-color: red }
      &.blue-army { background-color: blue }
    }
  }
</style>
