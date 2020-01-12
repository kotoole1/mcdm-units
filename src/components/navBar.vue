<template>
  <div id="nav-bar">
    <button class="navbar-btn-right-end"
         :class="btnFlat()"
         :disabled="!canUndo"
         @shortkey="undoEdit()"
         @click="undoEdit()"
         v-shortkey.once="['cmd', 'z']">
      <i class="material-icons">undo</i> Undo</button>
    <button class="navbar-btn-right"
            :class="btnFlat()"
            :disabled="!canRedo"
            @click="redoEdit()">
      <i class="material-icons">redo</i> Redo</button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {
    },
  })
  export default class NavBar extends Vue {
    private undoEdit(): void {
      // @ts-ignore
      this.undo();
    }

    private redoEdit(): void {
      // @ts-ignore
      this.redo();
    }
  }
</script>
<style scoped src="../styles/material.indigo-red.min.css"></style>
<style scoped lang="less">
  #nav-bar {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 40px;
    box-shadow: 10px 0 10px #888;
    display: flex;
  }

  .navbar-btn-right-end {
    margin-left: auto;
  }
</style>
