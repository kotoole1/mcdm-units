<template>
  <div id="root-editor">
    <div v-if="selectedItemId"
         class="card-container">
      <UnitCard/>
      <UnitCardPng></UnitCardPng>
    </div>
    <UnitEditor v-if="selectedItemId"
                class="unit-editor-container"
                @newHomebrew="onNewHomebrew($event)"
                @editItem="editItem($event)"/>
    <HomebrewItemEditor v-if="selectedHomebrewItem"
                        class="homebrew-editor-container"
                        :itemId="selectedHomebrewItem"
                        :itemType="selectedHomebrewType"
                        @close="closeHomebrewEdit()"
    />
    <ArmyEditor class="army-editor-container"/>
  </div>
</template>

<script lang="ts">
  import {EditOptionData} from '@/components/dropdownOption';
  import HomebrewItemEditor from '@/components/homebrewItemEditor.vue';
  import {Ancestry, newHomebrewAncestry} from '@/options/ancestry';
  import {HomebrewItem, HomebrewType} from '@/options/homebrew';
  import {RootModel} from 'src/models/rootModel';
  import {Component, Vue} from 'vue-property-decorator';
  import ArmyEditor from './armyEditor.vue';
  import UnitCard from './unitCard.vue';
  import UnitCardPng from './unitCardPng.vue';
  import UnitEditor from './unitEditor.vue';

  @Component({
  components: {
    HomebrewItemEditor,
    ArmyEditor,
    UnitCard,
    UnitEditor,
    UnitCardPng,
  },
})
export default class RootEditor extends Vue {
  public static initialState: RootModel | null = null; // should only be set once when the page loads, by
  public selectedHomebrewItem: string = '';
  public selectedHomebrewType: HomebrewType = HomebrewType.ANCESTRY;
  // TODO: store selected unit here, have undo-redo introspect into its undo stack and to select the last changed unit

  private finishedEditCallback: (() => void) | undefined = undefined;

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
  public onNewHomebrew(itemType: HomebrewType): void {
    let item: HomebrewItem;
    switch (itemType) {
      case HomebrewType.ANCESTRY:
        const ancestry: Ancestry = newHomebrewAncestry();
        this.$store.commit('addHomebrewAncestry', ancestry);
        item = ancestry;
        break;
      default:
        return;
    }
    if (!item || !item.id) {
      console.warn('Failed to add item of type ' + itemType, item);
      return;
    }

    this.selectedHomebrewItem = item.id;
    this.selectedHomebrewType = itemType;
  }

  public editItem(editOptionData: EditOptionData): void {
    this.selectedHomebrewType = editOptionData.homebrewType;
    this.selectedHomebrewItem = editOptionData.option.id;
    this.finishedEditCallback = editOptionData.finishedEditCallback;
  }

  public closeHomebrewEdit(): void {
    this.selectedHomebrewItem = '';
    if (this.finishedEditCallback) {
      this.finishedEditCallback();
    }
    // ensure the
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
    z-index: @army-editor-z;
  }
  .unit-editor-container {
    left: @army-editor-width;
    z-index: @unit-editor-z;
  }
  .homebrew-editor-container {
    left: @army-editor-width;
    z-index: @homebrew-editor-z;
  }
  .card-container {
    left: @army-editor-width + @unit-editor-width;
    padding: 15px 0 0 25px;
  }
</style>
