import {createDefaultArmies, NO_ARMY_ID} from '@/models/defaultRootModel';
import {removeIf} from '@/models/utils';
import {getAllAncestries} from '@/options/ancestry';
import {vuexLocal} from '@/store/persistence';
import * as _ from 'lodash';

import {ArmyModel} from '@/models/armyModel';
import {RootModel} from '@/models/rootModel';
import {UnitModel} from '@/models/unitModel';
import RootEditor from '@/components/rootEditor.vue';
import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import VuexUndoRedo from 'vuex-undo-redo';

Vue.use(Vuex);
Vue.use(VuexUndoRedo);

export default new Vuex.Store<RootModel>({
  state: new RootModel(), // VuexPersistence should override this
  mutations: {
    setEverything: (state, { uploadedState }: { uploadedState: RootModel}) => {
      // WARNING: This overwrites the entire state. For anything other than opload, more
      // incremental mutations should be used
      state.units = uploadedState.units;
      state.armies = uploadedState.armies;
      // TODOK
    },
    emptyState() { // For vuex-undo-redo
      if (RootEditor.initialState) {
        // Unfortunately, skipping the cloneDeep leaves vuex in a state where it
        // is directly mutating initialState, so we have to clone on every undo =/
        this.replaceState(_.cloneDeep(RootEditor.initialState));
      } else {
        // TODO: rectify
        this.replaceState(new RootModel());
      }
    },
    changeUnitField: (state, { unitId, field, value }:
      { unitId: string, field: keyof UnitModel, value: any}) => {
      const unit = getUnit(state, unitId);
      const oldValue: any = unit[field];
      unit[field] = value;
      if (field === 'ancestryId') {
        const ancestries = getAllAncestries(state);
        fixTraitsAndOrders(state, unitId, ancestries[oldValue], ancestries[value]);
      }
    },
    changeArmyField: (state, { armyId, field, value }:
      { armyId: string, field: keyof ArmyModel, value: any}) => {
      getArmy(state, armyId)[field] = value;
    },
    addUnit: (state, { unit }: {unit: UnitModel}) => {
      state.units.push(unit);
      const army = getArmy(state, unit.owningArmyId);
      if (army) {
        army.unitIds.push(unit.id);
      }
      state.selectedItemId = unit.id;
    },
    deleteUnit: (state, { unitId }: {unitId: string}) => {
      state.units = state.units.filter((unit) => {
        return unit.id !== unitId;
      });
      state.armies.forEach((army) => {
        army.unitIds = army.unitIds.filter((armyUnitId) => {
          return armyUnitId !== unitId;
        });
      });
      if (unitId === state.selectedItemId) {
        state.selectedItemId = getFirstUnitId(state);
      }
    },
    setArmies: (state, { armies }: {armies: ArmyModel[]}) => {
      state.armies = armies;
    },
    selectItem: (state, { unitId }: { unitId: string}) => {
      // if (unitId === 'NEXT') {
      //   const oldIndex = state.units.find((unit) => unit.id === state.selectedUnitId);
      //   if (!oldIndex) {
      //     state.selectedUnitId = '';
      //     return;
      //   } else {
      //     const newIndex = (oldIndex + 1) % state.units.length;
      //     const newUnit: UnitModel = state.units[newIndex];
      //     if (newUnit) {
      //       unitId = newUnit.id;
      //     }
      //   }
      // }
      state.selectedItemId = unitId;
    },
  },
  getters: {
    unit: (state) => (id: string) => {
      return getUnit(state, id);
    },
    allUnits: (state) => {
      return state.units;
    },
    army: (state) => (id: string) => {
      return getArmy(state, id);
    },
    allArmies: (state) => {
      return state.armies;
    },
  },
  plugins: [vuexLocal.plugin],
});

function fixTraitsAndOrders(state: RootModel, unitId: string,
                            oldThing: {traitIds?: string[], orderIds?: string[]},
                            newThing: {traitIds?: string[], orderIds?: string[]}): void {
  const unit = getUnit(state, unitId);
  if (!unit) {
    return;
  }

  if (oldThing && oldThing.orderIds && unit.orderIds) {
    oldThing.orderIds.forEach((orderId: string) => {
      removeIf(unit.orderIds, (unitOrderId: string) => unitOrderId === orderId);
    });
  }

  if (newThing && newThing.orderIds) {
    newThing.orderIds.forEach((orderId: string) => {
      if (!unit.orderIds.includes(orderId)) {
        unit.orderIds.push(orderId);
      }
    });
  }

  if (oldThing && oldThing.traitIds && unit.traitIds) {
    oldThing.traitIds.forEach((traitId: string) => {
      removeIf(unit.traitIds, (unitTraitId: string) => unitTraitId === traitId);
    });
  }

  if (newThing && newThing.traitIds) {
    newThing.traitIds.forEach((traitId: string) => {
      if (!unit.traitIds.includes(traitId)) {
        unit.traitIds.push(traitId);
      }
    });
  }
}

function getUnit(state: RootModel, id: string): UnitModel {
  return state.units.find((unit) => unit.id === id)!;
}

function getArmy(state: RootModel, id: string): ArmyModel {
  return state.armies.find((army) => army.id === id)!;
}

function getFirstUnitId(state: RootModel): string {
  if (state.armies.length && state.armies[0].unitIds.length) {
    return state.armies[0].unitIds[0];
  }
  return '';
}
