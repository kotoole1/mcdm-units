<template>
  <div id="#root-editor">
    <UnitEditor :activeUnitId="activeUnitId"/>
    <div class="card-container">
      <UnitCard :activeUnitId="activeUnitId"/>
    </div>
  </div>
</template>

<script lang="ts">
import UnitCard from './unitCard.vue';
import UnitEditor from './unitEditor.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    UnitCard,
    UnitEditor,
  },
})
export default class RootEditor extends Vue {
  private activeUnitId = this.$store.state.units[0].id;
}
</script>

<style scoped lang="less">
  #root-editor {
    width: 100%;
    height: 100%;
  }
  .card-container {
    position: relative;
    left: @unit-editor-width;
    padding: 15px 0 0 25px;
  }
</style>
