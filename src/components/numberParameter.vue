<template>
  <div class="parameter number-parameter">
    <label>{{ name }}</label>
    <number-input class="number-input"
                  :value="value"
                  :min="min"
                  :max="max"
                  :step="step"
                  size="small"
                  @change="$emit('input', $event)"
                  inline controls center>
    </number-input>
  </div>
</template>
<script lang="ts">
  import VueNumberInput from '@chenfengyuan/vue-number-input';
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    components: {
      'number-input': VueNumberInput, // tslint:disable-line:no-implicit-any
    },
  })
  export default class NumberParameter extends Vue {
    @Prop({ type: Number, required: true })
    public value!: number;
    @Prop(String)
    public name!: string;
    @Prop({ type: Number, default: 0 })
    public min!: number;
    @Prop({ type: Number, default: 100 })
    public max!: number;
    @Prop({ type: Number, default: 1 })
    public step!: number;
  }
</script>
<style lang="less">
  .number-parameter {
    label {
      align-self: center;
      white-space: nowrap;
      margin-right: 5px;
    }
    .number-input {
      margin: 6px 0 6px 6px;
      flex-grow: 1;
      input {
        box-sizing: border-box;
        width: 100% !important;
      }
    }
  }
</style>
