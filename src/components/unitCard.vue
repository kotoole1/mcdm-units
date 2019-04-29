<template>
  <div class="std">
    <div class="background"></div>
    <div class="content">
      <div class="heading">
        <div class="name">{{ title }}</div>
        <div class="descriptor-line">{{ ancestry.name }} {{  }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Ancestry, AncestryOptions} from 'src/components/ancestry';
import {Equipment, EquipmentOptions} from 'src/components/equipment';
import {Experience, ExperienceOptions} from 'src/components/experience';
import {UnitType, UnitTypeOptions} from 'src/components/unitType';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    // title: String,
  },
})
export default class UnitCard extends Vue {
  @Prop() private msg!: string;

  private title: string = 'IRONHEART DEFENDERS';
  private ancestry: Ancestry = AncestryOptions.DWARF;
  private experience: Experience = ExperienceOptions.SEASONED;
  private equipment: Equipment = EquipmentOptions.MEDIUM;
  private unitType: UnitType = UnitTypeOptions.INFANTRY;
}
</script>

<style scoped lang="less">
  @overall-width: 400px;
  @overall-height: 500px;
  @border-slice: 120;
  @border-width: 60px;

  .std {
    width: @overall-width;
    height: @overall-height;

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
      /*width: 100%;*/
      text-align: left;
      text-transform: uppercase;
      .name {
        font-family: 'Bitter', serif;
        font-weight: 800;
        font-size: 14pt;
        color: rgb(186, 14, 32);
        border-bottom: 1px solid black;
      }
      .descriptor-line {
        font-family: 'Bitter', serif;
        font-weight: 800;
      }
    }
  }
</style>
