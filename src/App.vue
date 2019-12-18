<template>
  <div id="app">
    <!--<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Martel|Bitter|Kameron|Open+Sans|Raleway">
    <!--<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-red.min.css">-->
    <RootEditor/>
  </div>
</template>

<script lang="ts">
import RootEditor from './components/rootEditor.vue';
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    RootEditor,
  },
})
export default class App extends Vue {
}
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
