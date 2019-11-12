<template>
  <div class="dropdown-parameter">
    <label class="dropdown-label">{{ name }}</label>
    <v-select class="dropdown-select no-clear"
              :value="value"
              :options="getDropdownOptions()"
              :reduce="option => option.id"
              @input="$emit('input', $event)"
    ></v-select>
  </div>
</template>
<script lang="ts">
  import {DropdownOption} from 'src/components/dropdownOption';
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
      const optionsToDisplay: DropdownOption[] = [];
      Object.keys(this.options).forEach((key) => {
        const option = this.options[key];
        option.id = key;
        option.label = option.name ? option.name : option.id;
        optionsToDisplay.push(option);
      });
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

  .dropdown-parameter {
    display: flex;
    flex-grow: 1;
    margin-bottom: 5px;
  }

  .dropdown-select {
    flex-grow: 1;
  }

  .dropdown-label {
    align-self: center;
    margin-right: 5px;
  }
</style>
