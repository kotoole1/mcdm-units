<template>
  <div class="std">
    <div class="content">
      <div class="banner std-banner-left">

      </div>
      <div class="heading">
        <div class="name">{{ title }}</div>
        <div class="descriptor-line">{{ ancestry.name }} {{ experience.name }}</div>
        <div class="descriptor-line">{{ equipment.name }} {{ unitType.name }}</div>
      </div>
      <div class="main-content">
        <div class="std-table">
          <div class="optional-cost"></div>
          <div class="std-tr">
            <div class="std-td"><span>ATTACK:</span><span>+4</span></div>
            <div class="std-td"><span>DEFENSE:</span><span>14</span></div></div>
          <div class="std-tr">
            <div class="std-td"><span>POWER:</span><span>+3</span></div>
            <div class="std-td"><span>TOUGHNESS:</span><span>13</span></div></div>
          <div class="std-tr">
            <div class="std-td"><span>MORALE:</span><span>+4</span></div>
            <div class="std-td"><span>SIZE:</span><span>1d6</span></div></div>
        </div>
        <div class="section-title">TRAITS</div>
        <p class="section-content" v-for="trait in traits"><b>{{ trait.name }}.</b> {{ trait.description }}</p>
        <div class="section-title">ORDERS</div>
        <p class="section-content" v-for="order in orders"><b>{{ order.name }}!</b> {{ order.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {UnitBase} from '@/components/unitBase';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class UnitCard extends UnitBase {
  @Prop() private msg!: string;
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

  div {
    box-sizing: border-box;
  }

  p {
    hyphens: auto;
  }

  .std {
    width: @overall-width;
    /*<!--height: @overall-height;-->*/
    text-align: left;
    position: absolute;
    border: @border-width solid;
    border-image-source: url(../assets/original-background.png);
    border-image-slice: @border-slice fill;
    border-image-repeat: stretch;

    .content {
      margin: -@border-width;
      position: relative;
      padding: @padding-width;
    }

    .heading {
      margin-left: 85px;
      margin-top: 5px;
      margin-bottom: 10px;
      text-transform: uppercase;
      .name {
        font-family: 'Bitter', serif;
        font-weight: 800;
        font-size: 14pt;
        color: @light-red;
        border-bottom: 1px solid black;
        margin-bottom: 5px;
      }
      .descriptor-line {
        font-family: 'Bitter', serif;
        font-weight: 900;
        font-size: 11pt;
        color: @dark-red;
      }
    }

    .optional-cost {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      color: @dark-red;
    }

    .optional-cost {
      text-align: right;
      height: 1.5em;
    }

    .std-table {
      margin-bottom: 5px;
      .std-tr {
        border-top: 2px solid black;
        padding-top: 3px;
        padding-bottom: 1px;
        color: @light-red;
        font-family: 'Calluna Sans', sans-serif;
        font-weight: 600;
        font-size: 11pt;
        line-height: 1.1em;

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
        span {
          display: inline-block;
          flex-direction: column;
        }
      }

      .std-tr:last-child {
        border-bottom: 2px solid black;
      }
    }

    .section-title {
      margin-top: 10px;
      font-family: 'Bitter', serif;
      font-weight: 800;
      /*font-size: 14pt;*/
      color: @light-red;
    }
    .section-content {
      color: @dark-red;
      margin-top: 2px;
      margin-bottom: 5px;
    }
    /*.std-banner-left {*/
      /*position: absolute;*/
      /*background-color: green;*/
      /*left: 20px;*/
      /*top: 0px;*/
      /*width: 100px;*/
      /*height: 100px;*/
    /*}*/
  }
</style>
