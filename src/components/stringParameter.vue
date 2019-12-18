<template>
  <div class="parameter string-parameter">
    <label>{{ name }}</label>
    <input class="string-input"
           :value="value"
           @input="$emit('input', $event.target.value)">
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({})
  export default class StringParameter extends Vue {
    @Prop({type: String, required: true})
    public value!: boolean;
    @Prop(String)
    public name!: string;
  }
</script>
<style lang="less">
  .string-parameter {
    label {
      align-self: center;
      margin-right: 5px;
    }
    // Mostly just imitating dropdown styles
    .string-input {
      flex-grow: 1;
        align-self: center;
      margin: 0 0 0 6px;
      border: 1px solid rgba(60,60,60,.26);
      border-radius: 4px;
      padding: 5px 7px;
      font-size: 16px;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      color: #333;
    }
  }
</style>
