<template>
  <PrintPreview></PrintPreview>
</template>

<script lang="ts">
  import PrintPreview from '@/components/printPreview.vue';
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {
      PrintPreview,
    },
  })
  export default class PrintPage extends Vue {
  }
</script>

<style lang="less">

</style>
