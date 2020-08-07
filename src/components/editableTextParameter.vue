<template>
  <div class="parameter editable-text-parameter display-text"
       contenteditable="true"
       :class="getClasses()"
       @focus="onFocus()"
       @blur="confirmEditing()"
       @input="$emit('input', $event.target.textContent)"
  >{{ isEditing ? confirmedValue : value }}</div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  /**
   * An editable text parameter differs from a string parameter in that the
   * visible text is already styled how it should be, and the text being
   * edited is directly shown in that style
   */
  @Component({})
  export default class EditableTextParameter extends Vue {
    @Prop({type: String, required: true})
    public value!: string;
    // While editing, we don't tie directly to value, because setting contentEditable HTML,
    // unlike <input>s, will lose the cursor position
    public confirmedValue: string = this.value;
    private isEditing = false;

    public getClasses(): {[key: string]: boolean } {
      return {
        title: true,
      };
    }

    public onFocus() {
      this.isEditing = true;
      this.confirmedValue = this.value;
      this.selectAll(this.$el);
    }

    private selectAll(element: Element) {
      const range = document.createRange();
      range.selectNodeContents(element);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    public confirmEditing(): void {
      this.confirmedValue = this.value;
      this.isEditing = false;
    }
  }
</script>
<style lang="less">
  .display-text {
    cursor: text;
    border: none;
    flex-grow: 1;
  }

  .string-parameter {
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
