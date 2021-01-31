<template>
  <div class="parameter dropdown-parameter">
    <label class="parameter-label">{{ name }}</label>
    <v-select ref="vSelect"
              class="dropdown-select no-clear"
              :value="value"
              :options="getDropdownOptions()"
              :reduce="option => option.id"
              @input="$emit('input', $event)">
      <template v-if="homebrewLabel"
                v-slot:list-header>
        <li class="new-homebrew-button vs__dropdown-option"
            @click="$emit('newHomebrew')">{{homebrewLabel}}</li>
      </template>
      <template v-slot:option="option">
        <div class="dropdown-option">
          <label class="option-label">{{ option.label }}</label>
          <div v-if="option.source === OptionSource.YOUR_HOMEBREW"
             class="option-icon material-icons"
             v-tooltip.right-end="'Edit your homebrew ' + getHomebrewTypeName()"
             @mousedown="editOption(option)">
            <LabIcon :ref="getRefName(option)" :width="20" />
          </div>
        </div>
      </template>
    </v-select>
  </div>
</template>
<script lang="ts">
  import {
    DropdownOption,
    EditOptionData,
    getDropdownOptionsForDisplay,
    PopulatedDropdownOption
  } from '@/components/dropdownOption';
  import LabIcon from '@/components/lab-icon.vue';
  import {RectangleDimensions} from '@/components/transitions';
  import {getTypeName, HomebrewType} from '@/options/homebrew';
  import {ClosedCallbackData, CloseStatus, WithAnimationPosition} from '@/options/homebrewEditorAnimation';
  import {OptionSource} from '@/options/optionSource';
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import VueSelect from 'vue-select';

  @Component({
    components: {
      LabIcon,
      'v-select': VueSelect,
    },
    data: () => {
      return {
        OptionSource,
      };
    },
  })
  export default class DropdownParameter extends Vue {
    @Prop({ type: Object, required: true })
    public options!: {[key: string]: DropdownOption};
    @Prop()
    public value!: DropdownOption;
    @Prop({type: String})
    public name!: string;
    @Prop(Boolean)
    public alphabetical!: boolean;
    @Prop(Number)
    public homebrewType!: HomebrewType;
    @Prop(String)
    public homebrewLabel!: string;

    public getDropdownOptions(): PopulatedDropdownOption[] {
      const optionsToDisplay: PopulatedDropdownOption[] = getDropdownOptionsForDisplay(this.options);
      if (this.alphabetical) {
        optionsToDisplay.sort((option1, option2) => {
          return option1.label!.localeCompare(option2.label!);
        });
      }
      return optionsToDisplay;
    }

    public getHomebrewTypeName(): string {
      return getTypeName(this.homebrewType);
    }

    public editOption(option: PopulatedDropdownOption): void {
      const iconElement: Vue = <Vue> this.$refs[this.getRefName(option)];
      let iconPosition;
      if (iconElement && iconElement.$el) {
        iconPosition = RectangleDimensions.fromElement(iconElement.$el);
      }
      this.$emit('editOption', {
        option,
        iconPosition,
        finishedEditCallback: this.getFinishedEditCallback(option),
        beforeFinishedEditCallback: this.beforeFinishedEditCallback,
        homebrewType: this.homebrewType,
      });
    }

    public getRefName(option: DropdownOption): string {
      return 'ref-' + option.id;
    }

    public beforeFinishedEditCallback(): void {
      (<HTMLElement> (<Vue> this.$refs.vSelect).$refs.search).focus();
    }

    public getFinishedEditCallback(option: PopulatedDropdownOption): (closedData: ClosedCallbackData) => (WithAnimationPosition|null) {
      return (closedData: ClosedCallbackData) => {
        // TODO: scroll to item

        if (closedData.status === CloseStatus.CONFIRMED) {
          // TODO: return data for animation?
          if (option) {
            const iconElement: LabIcon = <LabIcon> (this.$refs[this.getRefName(option)]);
            if (iconElement) {
              return iconElement;
            }
          }
        }
        return null;
      }
    }
  }
</script>

<style lang="less">
  .option-icon {
    width: 20px;
    height: 20px;
    align-self: flex-start;
  }

  .option-label {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .vs__actions svg {
    transition-duration: 0s;
  }

  .vs__dropdown-option {
    padding: 0;
  }

  .dropdown-option {
    padding: 3px 20px;
    display: flex;
  }

  .no-clear .vs__clear {
    display: none;
  }

  .dropdown-select {
    flex-grow: 1;
    margin-left: 5px;
  }

  .new-homebrew-button {
    &:hover {
    }
  }
</style>
