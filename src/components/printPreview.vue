<template>
  <div id="print-preview">
    <div class="print-preview-row"
         v-for="row in numberOfRows">
      <div v-for="column in numberOfColumns"
           class="card-print-wrapper"
           :style="{ height: heightForUnit(unitId(row, column)) + 'px' }">
        <UnitCard v-if="unitId(row, column)"
                  :activeUnitId="unitId(row, column)"
                  @height="setHeightForUnit(unitId(row, column), $event)"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import UnitCard from '@/components/unitCard.vue';
  import {ArmyModel} from 'src/models/armyModel';
  import {Component, Vue} from 'vue-property-decorator';
  import {BAD_GUYS_ID, GOOD_GUYS_ID} from '../models/defaultRootModel';

  @Component({
    components: {
      UnitCard,
    },
  })
  export default class PrintPage extends Vue {
    private unitIdToHeight: {[key: string]: number} = {};
    private testUnits: undefined[] = new Array(11);

    private get numberOfRows(): number {
      return Math.ceil(this.unitsToPrint.length / 2);
    }

    private get numberOfColumns(): number {
      return 2;
    }


    private unitId(row: number, column: number): string {
      const index: number = (row * this.numberOfColumns) - column;
      return this.sortedUnitsToPrint[index];
    }

    private get sortedUnitsToPrint(): string[] {
      const toBeSorted = this.unitsToPrint;
      toBeSorted.sort((unitIdA: string, unitIdB: string) => {
        return this.unitIdToHeight[unitIdA] - this.unitIdToHeight[unitIdB];
      });
      return toBeSorted;
    }

    private get unitsToPrint(): string[] {
      return this.armiesToPrint.flatMap((army: ArmyModel) => {
        return army.unitIds;
      });
    }

    private setHeightForUnit(unitId: string, height: number): void {
      this.$set(this.unitIdToHeight, unitId, height);
    }

    private get heightForUnit(): ((id: string) => number) {
      return (unitId: string) => {
        return (this.unitIdToHeight[unitId] || 0);
      };
    }

    private get armiesToPrint(): ArmyModel[] {
      return this.armyIdsToPrint.map((armyId) => this.$store.getters.army(armyId));
    }

    private get armyIdsToPrint(): string[] {
      return [
        GOOD_GUYS_ID,
        BAD_GUYS_ID,
      ];
    }
  }
</script>

<style lang="less">

  .print-preview-row {
    page-break-inside: avoid;
    position: relative;
    display: block;
    line-height: 0;
    width: @card-width * 2 + 10px;
  }

  #print-preview {
     position: relative;
    margin: 0;
    padding: 0;
    width: @card-width * 2 + 10px;
  }

  /*@media print {*/
    /**/
  /*}*/

  .card-print-wrapper {
    position: relative;
    display: inline-block;
    page-break-inside: avoid;
    line-height: initial;
    width: @card-width;
  }
</style>
