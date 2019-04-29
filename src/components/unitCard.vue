<template>
  <div class="std">
    <div class="background"></div>
    <div class="content">
      <div class="heading">
        <div class="name">
          IRONHEART DEFENDERS
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UnitCard extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @overall-width: 400px;
  @overall-height: 500px;
  @border-width: 120;
  @border-width-px: 60px;

  .std {
    width: @overall-width;
    height: @overall-height;

    .background {
      /*display: block;*/
      position: absolute;
      width: calc(@overall-width - 2 * @border-width-px);
      height: calc(@overall-height - 2 * @border-width-px);
      border: @border-width-px solid;
      border-image-source: url(../assets/original-background.png);
      border-image-slice: @border-width fill;
      border-image-repeat: stretch;
    }

    .content {
      position: absolute;
    }

    .heading {
      position: absolute;
      left: 150px;
      width: 100%;
      .name {
        font-family: 'Martel', serif;
        font-weight: 800;
      }
    }
  }
</style>
