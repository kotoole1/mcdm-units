<template>
  <div id="nav-bar">
    <div class="title">
      <div class="icon-container"><LabIcon :width="30"/></div>
      <label>Unit lab</label>
    </div>
    <button class="navbar-btn-right-end"
         :class="btnFlat()"
         :disabled="!canUndo"
         @shortkey="undoEdit()"
         @click="undoEdit()"
         v-shortkey.once="['cmd', 'z']">
      <i class="material-icons md-light">undo</i> Undo</button>
    <button class="navbar-btn-right"
            :class="btnFlat()"
            :disabled="!canRedo"
            @click="redoEdit()">
      <i class="material-icons">redo</i> Redo</button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import LabIcon from '@/components/lab-icon.vue';

  @Component({
    components: {
      LabIcon,
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
    /*box-shadow: 10px 0 10px #888;*/
    display: flex;
    align-items: center;
    background-color: @dark-red;
    .mdl-button {
      color: white !important;
    }
    .mdl-button:disabled {
      color: rgba(255, 255, 255, 0.3) !important;
    }
  }

  .title {
    font-size: 18pt;
    margin-left: 10px;
    color: white;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }

  .icon-container {
    padding: 3px;
    margin-top: 12px;
  }

  .navbar-btn-right-end {
    margin-left: auto;
  }
</style>
