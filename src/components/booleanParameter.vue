<template>
  <div class="boolean-parameter" :class="{inline}">
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
    @Prop(Boolean)
    public inline!: boolean;
  }
</script>
<style lang="less">
  .boolean-parameter {
    display: flex;
    margin-bottom: 5px;
    padding: 6px 0;

    input {
      align-self: center;
      margin-right: 5px;
    }
    label {
      align-self: center;
    }
  }
</style>
