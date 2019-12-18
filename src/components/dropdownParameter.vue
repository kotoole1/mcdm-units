<template>
  <div class="parameter dropdown-parameter">
    <label class="parameter-label">{{ name }}</label>
    <v-select class="dropdown-select no-clear"
              :value="value"
              :options="getDropdownOptions()"
              :reduce="option => option.id"
              @input="$emit('input', $event)"
    ></v-select>
  </div>
</template>
<script lang="ts">
  import {DropdownOption, getDropdownOptionsForDisplay} from '@/components/dropdownOption';
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import VueSelect from 'vue-select';

  @Component({
    components: {
      'v-select': VueSelect,
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

    public getDropdownOptions(): DropdownOption[] {
      const optionsToDisplay: DropdownOption[] = getDropdownOptionsForDisplay(this.options);
      if (this.alphabetical) {
        optionsToDisplay.sort((option1, option2) => {
          return option1.label!.localeCompare(option2.label!);
        });
      }
      return optionsToDisplay;
    }
  }
</script>

<style lang="less">
  .no-clear .vs__clear {
    display: none;
  }

  .dropdown-select {
    flex-grow: 1;
    margin-left: 5px;
  }
</style>
