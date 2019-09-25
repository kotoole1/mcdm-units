<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Martel|Bitter|Kameron|Open+Sans" rel="stylesheet">
    <UnitEditor/>
    <UnitCard/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UnitCard from './components/unitCard.vue';
import UnitEditor from './components/unitEditor.vue';

@Component({
  components: {
    UnitCard,
    UnitEditor,
  },
})
export default class App extends Vue {}
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
