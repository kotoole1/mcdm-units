<template>
  <div class="std">
    <div class="background"></div>
    <div class="content">
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
        <p v-for="trait in traits"><b>{{ trait.name }}</b>.{{ trait.description }}</p>
        <div class="section-title">ORDERS</div>
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
  @dark-red: rgb(140, 36, 32);
  @light-red: rgb(186, 14, 32);

  .std {
    width: @overall-width;
    height: @overall-height;
    text-align: left;

    .background {
      /*display: block;*/
      position: absolute;
      width: calc(@overall-width - 2 * @border-width);
      height: calc(@overall-height - 2 * @border-width);
      border: @border-width solid;
      border-image-source: url(../assets/original-background.png);
      border-image-slice: @border-slice fill;
      border-image-repeat: stretch;
    }

    .content {
      position: relative;
      padding: 40px;
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
  }
</style>
