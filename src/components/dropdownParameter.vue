<template>
  <select class="dropdown">
    <option v-for="option in options"
            value="getName(option)">
      {{ getTitle(option) }}
    </option>
  </select>
</template>
<script lang="ts">
  import {DropdownOption} from 'src/components/dropdownOption';
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({})
  export default class DropdownParameter extends Vue {
    @Prop({ type: Array, required: true })
    public options!: DropdownOption[];

    public getName(option: DropdownOption): string {
      console.log(option);
      return option.name;
    } 

    public getTitle(option: DropdownOption): string {
      if (option.title) {
        return option.title;
      }
      return option.name;
    }
  }
</script>
