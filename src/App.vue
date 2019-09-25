<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Martel|Bitter|Kameron|Open+Sans" rel="stylesheet">
    <!--<RootEditor model="rootModel"/>-->
  </div>
</template>

<script lang="ts">
// import RootEditor from './components/rootEditor';
import {RootModel} from 'src/models/rootModel';
import {UnitModel} from 'src/models/unitModel';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    // RootEditor,
  },
})
export default class App extends Vue {
  // private rootModel: RootModel;
  // TODO: Big grand model here, saving and loading from cookies and from other stuff
  private mounted() {
    // const activeUnit = new UnitModel();
    // this.rootModel = new RootModel(activeUnit);
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
