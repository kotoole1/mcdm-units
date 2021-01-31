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
                        :ref="'homebrewItemEditor'"
                        class="homebrew-editor-container"
                        :class="{ concealed: homebrewItemConcealed }"
                        :itemId="selectedHomebrewItem"
                        :itemType="selectedHomebrewType"
                        @editItem="editItem($event)"
                        @close="closeHomebrewEdit(CloseStatus.CONFIRMED)"/>
    <ArmyEditor class="army-editor-container"/>
    <AnimationCart class="animating-lab-icon"
                   :ref="'animationCart'"
                   :parent-id="'root-editor'">
      <LabIcon :width="20"
               :ref="'animatingIcon'"></LabIcon>
    </AnimationCart>
  </div>
</template>

<script lang="ts">
  import AnimationCart from '@/components/animationCart.vue';
  import {EditOptionData} from '@/components/dropdownOption';
  import HomebrewItemEditor from '@/components/homebrewItemEditor.vue';
  import LabIcon from '@/components/lab-icon.vue';
  import {RectangleDimensions} from '@/components/transitions';
  import {Ancestry, newHomebrewAncestry} from '@/options/ancestry';
  import {HomebrewItem, HomebrewType} from '@/options/homebrew';
  import {ClosedCallbackData, CloseStatus, WithAnimationPosition} from '@/options/homebrewEditorAnimation';
  import {RootModel} from 'src/models/rootModel';
  import {Component, Vue} from 'vue-property-decorator';
  import ArmyEditor from './armyEditor.vue';
  import UnitCard from './unitCard.vue';
  import UnitCardPng from './unitCardPng.vue';
  import UnitEditor from './unitEditor.vue';

  // Animations take <1s, this is the timeout to make the panel disappear after animating away (in case of client lag)
  export const PANEL_ANIMATION_TIMEOUT = 1000; // ms

  @Component({
    components: {
      AnimationCart,
      LabIcon,
      HomebrewItemEditor,
      ArmyEditor,
      UnitCard,
      UnitEditor,
      UnitCardPng,
    },
    data: () => {
      return {
        CloseStatus,
      };
    },
  })
  export default class RootEditor extends Vue {
    public static initialState: RootModel | null = null; // should only be set once when the page loads, by
    public selectedHomebrewItem: string = '';
    public selectedHomebrewType: HomebrewType = HomebrewType.ANCESTRY;
    // TODO: store selected unit here, have undo-redo introspect into its undo stack and to select the last changed unit

    public homebrewItemConcealed: boolean = true;

    private optionBeingEdited: EditOptionData | null = null;

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
      this.revealHomebrewPanel();
    }

    public editItem(editOptionData: EditOptionData): void {
      this.animateToPanel(editOptionData);
      if (editOptionData.option) {
        this.selectedHomebrewType = editOptionData.homebrewType;
        this.selectedHomebrewItem = editOptionData.option.id;
        this.optionBeingEdited = editOptionData;
        this.revealHomebrewPanel();
      } else {
        this.closeHomebrewEdit(CloseStatus.DELETED);
      }
    }

    private revealHomebrewPanel(): void {
      this.homebrewItemConcealed = true;
      setTimeout(() => {
        this.homebrewItemConcealed = false;
      });
    }

    public closeHomebrewEdit(status: CloseStatus): void {
      // Ensure the panel is hidden before it disappears
      this.homebrewItemConcealed = true;
      this.animateToDropdown(status);

      setTimeout(() => {
        this.selectedHomebrewType = HomebrewType.ANCESTRY;
        this.selectedHomebrewItem = '';
      }, PANEL_ANIMATION_TIMEOUT);
    }

    private animateToDropdown(status: CloseStatus): void {
      if (this.optionBeingEdited && this.optionBeingEdited.beforeFinishedEditCallback) {
        this.optionBeingEdited.beforeFinishedEditCallback();
      }

      setTimeout(() => {
        if (!this.optionBeingEdited || !this.optionBeingEdited.finishedEditCallback) {
          return;
        }
        const destination: WithAnimationPosition|null = this.optionBeingEdited.finishedEditCallback({ status });
        if (!destination) {
          return;
        }

        const animationCart: AnimationCart = <AnimationCart> (this.$refs['animationCart']);
        const homebrewPanel: HomebrewItemEditor = <HomebrewItemEditor> (this.$refs['homebrewItemEditor']);
        if (!animationCart || !homebrewPanel) {
          return;
        }
        const iconOnCart: LabIcon = <LabIcon> (this.$refs['animatingIcon']);
        const iconAtStart: LabIcon = <LabIcon> (homebrewPanel.$refs['homebrewEditingIcon']);
        if (!iconOnCart || !iconAtStart) {
          return;
        }
        iconOnCart.active = true;
        destination.setVisibility(false);
        destination.startDurationEffects();
        iconAtStart.invisible = true;
        animationCart.setAnimationPosition(RectangleDimensions.fromElement(iconAtStart.$el));

        const destinationPosition = RectangleDimensions.fromElement(destination.getElement());
        animationCart.animateTo(destinationPosition, 1000, () => {
          destination.setVisibility(true);
          iconOnCart.setVisibility(false);
        });

        this.optionBeingEdited = null;
      });
    }

    private animateToPanel(editOptionData: EditOptionData): void {
      setTimeout(() => {
        const animationCart: AnimationCart = <AnimationCart> (this.$refs['animationCart']);
        const homebrewPanel: HomebrewItemEditor = <HomebrewItemEditor> (this.$refs['homebrewItemEditor']);
        if (!animationCart || !homebrewPanel) {
          return;
        }
        const iconOnCart: LabIcon = <LabIcon> (this.$refs['animatingIcon']);
        const iconAtDestination: LabIcon = <LabIcon> (homebrewPanel.$refs['homebrewEditingIcon']);
        if (!iconAtDestination || !editOptionData.iconPosition) {
          return;
        }
        iconOnCart.active = true;
        iconAtDestination.invisible = true;
        iconAtDestination.active = true;
        animationCart.setAnimationPosition(editOptionData.iconPosition);
        const destination = RectangleDimensions.fromElement(iconAtDestination.$el);
        // At this point, the panel is not animated into place, so the true destination needs to shift
        destination.left += 320; // @unit-editor-width + 20px
        animationCart.animateTo(destination, 1000, () => {
          iconAtDestination.invisible = false;
          iconOnCart.active = false;
          setTimeout(() => {
            iconAtDestination.active = false; // Keep animating for a bit longer
          }, 2200);
        });
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
    overflow: hidden;
    /*width: 100%;*/
    /*height: ~"calc(100vh - 40px)";*/
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
    transition: transform .5s;
    &.concealed {
      transform: translateX(-(@unit-editor-width + 20px));
    }
    &:not(.concealed) {
      transform: none;
    }
  }
  .card-container {
    left: @army-editor-width + @unit-editor-width;
    padding: 15px 0 0 25px;
  }

  .animating-lab-icon {
    z-index: @animating-lab-icon-z;
    position: absolute;
  }
</style>
