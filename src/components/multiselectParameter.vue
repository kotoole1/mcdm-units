<template>
  <div class="parameter multiselect-parameter">
    <label class="parameter-label">{{ name }}</label>
    <div class="multiselect-wrapper">
      <v-multiselect :options="getDropdownOptions()"
                     :value="optionsFromIds(value)"
                     :multiple="true"
                     :close-on-select="true"
                     :placeholder="'Select ' + name.toLowerCase()"
                     track-by="id"
                     label="label"
                     @input="$emit('input', idsFromOptions($event))">
        <template slot="noResult">No results</template>
        <template slot="option" scope="scope">{{ scope.option.label }}</template>
      </v-multiselect>
    </div>
  </div>
</template>

<script lang="ts">
  import {PopulatedDropdownOption} from 'src/components/dropdownOption';
  import Multiselect from 'vue-multiselect';
  import {DropdownOption, getDropdownOptionsForDisplay} from '@/components/dropdownOption.ts';
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    components: {
      'v-multiselect': Multiselect,
    },
  })
  export default class MultiselectParameter extends Vue {
    @Prop({ type: Object, required: true })
    public options!: {[key: string]: DropdownOption};
    @Prop({type: Array, required: true})
    public value!: string[];
    @Prop(String)
    public name!: string;
    @Prop(Boolean)
    public alphabetical!: boolean;

    private getDropdownOptions(): DropdownOption[] {
      return getDropdownOptionsForDisplay(this.options);
    }

    private idsFromOptions(options: PopulatedDropdownOption[]): string[] {
      return options.map((option) => option.id);
    }

    private optionsFromIds(ids: string[]): DropdownOption[] {
      const options: DropdownOption[] = [];
      ids.forEach((id) => {
        if (this.options[id]) {
          options.push(this.options[id]);
        }
      });
      return options;
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="less">
  .multiselect-parameter {
    .multiselect-wrapper {
      flex-grow: 1;
      display: block;
      margin-left: 5px;
      width: 0; // Not the actual width, just gets v-multiselect width to respect the line size
    }

    .multiselect {
      min-height: 41px;
      box-sizing: border-box;

      .multiselect__tags {
        border-color: rgba(60,60,60,.26); // TODOK: Remove, use the default color on all params instead
      }

      .multiselect__option:after {
        display: none;
      }
    }
    label {
      align-self: flex-start;
      padding-top: 5px;
    }
  }
</style>
