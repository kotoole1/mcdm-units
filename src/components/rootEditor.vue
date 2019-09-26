<template>
  <div id="#root-editor">
    <UnitEditor v-model="activeUnit"/>
    <UnitCard v-model="activeUnit"/>
  </div>
</template>

<script lang="ts">
import {UnitModel} from 'src/models/unitModel';
import UnitCard from './unitCard.vue';
import UnitEditor from './unitEditor.vue';
import {RootModel} from 'src/models/rootModel';
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  components: {
    UnitCard,
    UnitEditor,
  },
})
export default class RootEditor extends Vue {
  @Prop() private value!: RootModel;
  private activeUnit!: UnitModel;
  // @Prop() private activeUnit!: UnitModel;
  private created() {
    console.log(this.value);
    this.activeUnit = this.value.units[0];
  }
}
</script>

<style scoped lang="less">
#root-editor {
  width: 100%;
  height: 100%;
}
</style>
