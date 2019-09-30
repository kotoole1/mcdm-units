<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Martel|Bitter|Kameron|Open+Sans|Raleway" rel="stylesheet">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
