<template>
  <div class="std">
    <div class="content">
      <div class="banner-wrapper">
        <div class="banner std-banner-left"
             :style="{ backgroundImage: 'url(\'' + require('../assets/' + imageUrl ) + '\')',
                       backgroundPositionX: imageXPos + '%',
                       backgroundPositionY: imageYPos + '%',
                       backgroundSize: imageScale + '%' }"
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
            <div class="std-td"><span>SIZE:</span><span>{{ size }}</span></div></div>
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
import {mixins} from 'vue-class-component';
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
  //@light-red: rgb(33, 52, 135);
  //@dark-red: rgb(40, 91, 193);

  p {
    hyphens: auto;
    font-size: 16px;
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
      margin-left: 120px;
      margin-top: 5px;
      margin-bottom: 10px;
      text-transform: uppercase;

      .title-wrapper {
        min-height: 3em;
        display: flex;
        .title {
          font-family: 'Bitter', serif;
          font-weight: 800;
          font-size: 14pt;
          color: @light-red;
          display: inline-block;
          align-self: flex-end;
        }
      }

      .underlined {
        border-bottom: 1px solid black;
        margin-bottom: 5px;
      }
      .descriptor-line {
        font-family: 'Bitter', serif;
        font-weight: 900;
        font-size: 11pt;
        color: @dark-red;
        line-height: 1.3em;
      }
    }

    .main-content {
      /*position: relative;*/
      margin-top: 20px;
    }
    .optional-cost {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      color: @dark-red;
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
  }
  .banner {
    position: absolute;
  }

  .banner-wrapper {
    position: absolute;
    margin-top: -@padding-width;
    margin-left: -@padding-width;
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
  }

  .std-banner-left {
    left: 20px;
    top: 0;
    width: 120px;
    height: 150px;
    clip-path: polygon(0 0, 25% 0, 25% 10px, 75% 10px, 75% 0, 100% 0, 100% 100%, 75% 95%, 50% 100%, 25% 95%, 0 100%);
    /*background: url('../assets/light-axemen.jpg') no-repeat 60% 20%;*/
    box-shadow: 10px 5px 5px red;
    /*background-size: 200%;*/

    /*object-fit: contain;*/
  }

  .ancestry-banner {
    clip-path: polygon(0% 0% 0% 25% 10% 25%);
    background-color: red;
  }
</style>
