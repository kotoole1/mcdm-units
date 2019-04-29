<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Martel|Bitter|Kameron" rel="stylesheet">
    <UnitCard msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UnitCard from './components/unitCard.vue';

@Component({
  components: {
    UnitCard,
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
