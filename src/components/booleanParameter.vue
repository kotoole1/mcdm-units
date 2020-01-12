<template>
  <div class="parameter boolean-parameter">
    <label>
      <input :checked="value"
             @input="$emit('input', $event.target.checked)"
             type="checkbox"
      >{{ name }}</label>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({})
  export default class BooleanParameter extends Vue {
    @Prop({type: Boolean, required: true})
    public value!: boolean;
    @Prop(String)
    public name!: string;
  }
</script>
<style lang="less">
  .boolean-parameter {
    padding: 6px 0;
    input {
      align-self: center;
      margin: 0 5px 0 0;
      width: 13px;
      height: 13px;
    }
    label {
      margin-left: 2px;
    }
  }
</style>
