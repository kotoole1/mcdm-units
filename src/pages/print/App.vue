<template>
  <div id="app">
    <title>Print MCDM Units</title>
    <PrintPage></PrintPage>
  </div>
</template>

<script lang="ts">
  import PrintPage from '@/components/printPage.vue';
  import { Component, Vue } from 'vue-property-decorator';


  @Component({
    components: {
      PrintPage,
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
