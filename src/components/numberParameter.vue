<template>
  <div class="parameter number-parameter">
    <label>{{ name }}</label>
    <number-input class="number-input"
                  :value="value"
                  :min="min"
                  :max="max"
                  :step="step"
                  size="small"
                  @change="onChange($event)"
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

    public mounted(): void {
      // prevent tabbing into +/- buttons (the text here is more useful)
      this.$el.querySelectorAll('button').forEach((button: HTMLElement) => button.setAttribute('tabindex', '-1'));
    }

    private onChange(event: number): void {
      if (event !== this.value) {
        this.$emit('input', event);
      }
    }
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
        border-color: rgba(60,60,60,.26); // TODO: lighten this?
        height: 100%;
      }
      button {
        padding-bottom: 0;
      }
    }
  }
</style>
