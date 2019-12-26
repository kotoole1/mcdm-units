<template>
  <div id="app">
    <title>MCDM Unit Lab</title>
    <RootEditor/>
    <NavBar></NavBar>
  </div>
</template>

<script lang="ts">
  import NavBar from './components/navBar.vue';
  import RootEditor from './components/rootEditor.vue';
  import { Component, Vue } from 'vue-property-decorator';


  @Component({
    components: {
      NavBar,
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
