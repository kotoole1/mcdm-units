<template>
  <div class="editor-panel army-editor-panel">
    <div v-for="army in allArmies">
      <div class="param-line">
        <div class="title">{{ army.name }}</div>
        <DropdownParameter v-if="army.id !== NO_ARMY_ID"
                           :value="army.colorId"
                           :options="ColorOptions"
                           @input="setField(army.id, 'colorId', $event)"></DropdownParameter>
      </div>
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
      <div class="btn-container">
        <button :class="[ 'new-unit-btn', ...btnFlat()]"
                @click="newUnitClicked(army.id)">New Unit</button>
      </div>
    </div>
    <div class="bottom-btn-container">
      <div class="btn-row">
        <div :class="['bottom-btn', ...btn('colored')]"
             @click="openPrintPage()">
          <i class="material-icons">print</i> Print</div>
      </div>
      <div class="btn-row">
        <div :class="['bottom-btn', ...btn('accent')]"
             @click="saveDataAsJSON()">
          <i class="material-icons">file_download</i> Save</div>
        <div :class="['bottom-btn', ...btn('accent')]"
             @click="loadDataAsJSON()">
          <i class="material-icons">file_upload</i> Load</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {UnitModel} from '@/models/unitModel';
import {randomId} from '@/models/uuid';
import {ArmyModel} from 'src/models/armyModel';
import {ColorOptions} from '@/options/color';
import {NO_ARMY_ID} from '@/models/defaultRootModel';
import {RootModel} from 'src/models/rootModel';
import {Component, Vue, Prop} from 'vue-property-decorator';
import DropdownParameter from './dropdownParameter.vue';

@Component({
  components: {DropdownParameter},
  data: () => {
    return {
      NO_ARMY_ID,
      ColorOptions,
    };
  },
})
export default class UnitEditor extends Vue {
  private tempUploadElement: HTMLInputElement | null = null;

  private getUnit(unitId: string) {
    return this.$store.getters.unit(unitId);
  }

  protected get activeUnitId(): string {
    return this.$store.state.selectedItemId;
  }

  private getColor(army: ArmyModel) {
    return ColorOptions[this.$store.getters.army(army.id).colorId].cssClass;
  }

  private selectUnit(unitId: string) {
    this.$store.commit('selectItem', { unitId });
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
  }

  private addToArmy(unitId: string, owningArmyId: string) {
    const originalUnit: UnitModel = this.$store.getters.unit(unitId);
    const newUnit = <UnitModel> Object.assign({}, originalUnit);
    newUnit.id = randomId();
    newUnit.owningArmyId = owningArmyId;
    this.$store.commit('addUnit', {
      unit: newUnit,
    });
  }

  private setField(armyId: string, field: keyof ArmyModel, value: any): void {
    this.$store.commit('changeArmyField', { armyId, field, value });
  }

  private openPrintPage(): void {
    window.open('/print', '_blank');
  }

  private saveDataAsJSON(): void {
    const data = JSON.stringify(this.$store.state, null, 2);
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'MCDM Units.json');
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  private loadDataAsJSON(): void {
    this.tempUploadElement = <HTMLInputElement> (document.createElement('INPUT'));
    this.tempUploadElement.type = 'file';
    this.tempUploadElement.accept = 'application/json';

    const self: UnitEditor = this;
    // (cancel will not trigger 'change')
    this.tempUploadElement.addEventListener('change', (res) => {
      if (!self.tempUploadElement || !self.tempUploadElement.files || !self.tempUploadElement.files.length) {
        return;
      }
      try {
        const file = self.tempUploadElement.files[0];
        const reader = new FileReader();
        reader.onload = (event: Event) => {
          if (event && (<FileReader> event.target).result) {
            const fileContents = (<FileReader> event.target).result;
            if (fileContents && typeof fileContents === 'string') {
              const json: RootModel = <RootModel> JSON.parse(fileContents);
              // TODO: Validate this
              self.$store.commit('setEverything', { uploadedState: json } );
            }
          }
        };
        reader.readAsText(file);
      } catch (err) {
        // console.error(err);
        // TODOK: logging?
      }

      // // test some async handling
      // new Promise(function(resolve) {
      //   setTimeout(function() { console.log(self.tempUploadElement.files); resolve(); }, 1000);
      // })
      //   .then(function() {
      //     // clear / free reference
      //     self.tempUploadElement = null;
      //   });

    });

    this.tempUploadElement.click(); // open
  }
}
</script>
<style scoped src="../styles/material.indigo-red.min.css"></style>
<style lang="less">
  .title {
    align-self: center;
  }
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

  .mu-btn.new-unit-btn {
    display: block;
    font-size: 11px;
    line-height: 21px;
    height: 21px;
    text-align: left;
    margin-bottom: 10px;
  }

  .bottom-btn-container {
    position: absolute;
    /*display: flex;*/
    bottom: 0;
    right: 0;
    left: 0;
    padding: 5px;
  }

  .btn-row {
    display: flex;
    width: 100%;
  }

  .mu-btn.bottom-btn {
    float: bottom;
    flex-grow: 1;
    margin: 5px;
  }
</style>
