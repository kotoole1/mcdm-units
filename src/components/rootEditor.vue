<template>
  <div id="#root-editor">
    <!--<UnitEditor model="activeUnit"/>-->
    <!--<UnitCard model="activeUnit"/>-->
  </div>
</template>

<script lang="ts">
// import UnitCard from 'unitCard';
// import UnitEditor from 'unitEditor';
// import {RootModel} from 'src/models/rootModel';
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  components: {
    // UnitCard,
    // UnitEditor,
  },
})
export default class RootEditor extends Vue {
  // @Prop() private model: RootModel;
}
</script>

<style scoped lang="less">
#root-editor {
  width: 100%;
  height: 100%;
}
</style>
