<template>
  <div class="std"
       :class="[ color ]"
       id="unit-card-html">
    <div class="content">
      <div class="banner-wrapper">
        <div class="banner std-banner-left"
             :style="{ backgroundImage: bannerImage,
                       backgroundRepeat: 'no-repeat',
                       backgroundPositionX: imageXPos + '%',
                       backgroundPositionY: imageYPos + '%',
                       backgroundSize: 'auto ' + imageScale + '%' }"
        ></div>
      </div>
      <div class="heading">
        <div class="title-wrapper">
          <div class="title underlined">{{ activeUnit.title }}</div>
        </div>
        <div class="descriptor-line">{{ ancestryExperience  }}</div>
        <div class="descriptor-line">{{ equipmentType }}</div>
      </div>
      <div class="main-content">
        <div class="std-table">
          <div class="optional-cost"></div>
          <div class="std-tr">
            <div class="std-td"><span>ATTACK:</span><span>{{ attack }}</span></div>
            <div class="std-td"><span>DEFENSE:</span><span>{{ defense }}</span></div></div>
          <div class="std-tr">
            <div class="std-td"><span>POWER:</span><span>{{ power }}</span></div>
            <div class="std-td"><span>TOUGHNESS:</span><span>{{ toughness }}</span></div></div>
          <div class="std-tr">
            <div class="std-td"><span>MORALE:</span><span>{{ morale }}</span></div>
            <div class="std-td"><span>SIZE:</span><span>{{ sizeToDisplay }}</span></div></div>
        </div>
        <div v-if="traits.length" class="section-title">TRAITS</div>
        <p class="section-content" v-for="trait in traits"><b>{{ trait.name }}.</b> {{ trait.description }}</p>
        <div v-if="orders.length" class="section-title">ORDERS</div>
        <p class="section-content" v-for="order in orders"><b>{{ order.name }}!</b> {{ order.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {UnitBase} from '@/components/unitBase';
import {Component} from 'vue-property-decorator';

@Component({})
export default class UnitCard extends UnitBase {
  // protected get imageUrlOverride() {
  //   return this.imageUrl;
  // }
}
</script>

<style scoped lang="less">
  @overall-width: 400px;
  @overall-height: 500px;
  @border-slice: 120;
  @border-width: 60px;
  @padding-width: 40px;

  @dark-red: rgb(140, 36, 32);
  @light-red: rgb(186, 14, 32);
  @light-blue: rgb(33, 52, 135);
  @dark-blue: rgb(40, 91, 193);

  p {
    hyphens: auto;
    font-size: 16px;
  }

  .std {
    width: @overall-width;
    text-align: left;
    position: absolute;
    border: @border-width solid;
    border-image-slice: @border-slice fill;
    border-image-repeat: stretch;
    &.red-army { border-image-source: url(../assets/original-background.png); }
    &.blue-army { border-image-source: url(../assets/original-background-blue.png); }

    .content {
      margin: -@border-width;
      position: relative;
      padding: @padding-width;
    }

    .heading {
      margin-left: 120px;
      margin-top: 5px;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .title-wrapper {
      min-height: 3em;
      display: flex;
    }

    .title {
      font-family: 'Bitter', serif;
      font-weight: 800;
      font-size: 14pt;
      display: inline-block;
      align-self: flex-end;
    }
    &.red-army .title { color: @light-red; }
    &.blue-army .title { color: @light-blue; }

    .underlined {
      border-bottom: 1px solid black;
      margin-bottom: 5px;
    }

    .descriptor-line {
      font-family: 'Bitter', serif;
      font-weight: 900;
      font-size: 11pt;
      line-height: 1.3em;
    }
    &.red-army .descriptor-line { color: @dark-red; }
    &.blue-army .descriptor-line { color: @dark-blue; }

    .main-content {
      margin-top: 20px;
    }
    .optional-cost {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      color: @dark-red;
      text-align: right;
      height: 1.5em;
    }
    &.red-army .optional-cost { color: @dark-red; }
    &.blue-army .optional-cost { color: @dark-blue; }

    .std-table {
      margin-bottom: 5px;
    }

    .std-tr {
      border-top: 2px solid black;
      padding-top: 3px;
      padding-bottom: 1px;
      font-family: 'Calluna Sans', sans-serif;
      font-weight: 600;
      font-size: 11pt;
      line-height: 1.1em;

      span {
        display: inline-block;
        flex-direction: column;
      }
    }
    &.red-army .std-tr { color: @light-red; }
    &.blue-army .std-tr { color: @light-blue; }

    .std-td {
      display: inline-block;
    }
    .std-td:first-child {
      width: 50%;
      span:first-child {
        width: 90px;
      }
    }
    .std-td:last-child {
      span:first-child {
        width: 120px;
      }
    }

    .std-tr:last-child {
      border-bottom: 2px solid black;
    }

    .section-title {
      margin-top: 10px;
      font-family: 'Bitter', serif;
      font-weight: 800;
      color: @light-red;
    }
    &.red-army .section-title { color: @light-red; }
    &.blue-army .section-title { color: @light-blue; }

    .section-content {
      color: @dark-red;
      margin-top: 2px;
      margin-bottom: 5px;
    }
    &.red-army .section-content { color: @dark-red; }
    &.blue-army .section-content { color: @dark-blue; }
  } // .std

  .banner {
    position: absolute;
  }

  .banner-wrapper {
    position: absolute;
    margin-top: -@padding-width;
    margin-left: -@padding-width;
    filter: drop-shadow(1px 6px 3px rgba(50, 50, 0, 0.5)) drop-shadow(4px 0px 11px rgba(50, 50, 0, 0.3));
  }

  .std-banner-left {
    left: 20px;
    top: 0;
    width: 120px;
    height: 150px;
    clip-path: polygon(0 0, 25% 0, 25% 10px, 75% 10px, 75% 0, 100% 0, 100% 100%, 75% 95%, 50% 100%, 25% 95%, 0 100%);
  }

  // TODO: double banner
  .ancestry-banner {
    clip-path: polygon(0% 0% 0% 25% 10% 25%);
    background-color: red;
  }


</style>
