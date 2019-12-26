import * as _ from 'lodash';

import {ArmyModel} from '@/models/armyModel';
import {RootModel} from '@/models/rootModel';
import {UnitModel} from '@/models/unitModel';
import RootEditor from '@/components/rootEditor.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence, {AsyncStorage} from 'vuex-persist';
// @ts-ignore
import VuexUndoRedo from 'vuex-undo-redo';

Vue.use(Vuex);
Vue.use(VuexUndoRedo);


const vuexLocal = new VuexPersistence<RootModel>({
  storage: window.localStorage,
});

const localRestoreState: (key: string, storage?: AsyncStorage | Storage) => Promise<RootModel> | RootModel = vuexLocal.restoreState;
const localSaveState: (key: string, state: {}, storage?: AsyncStorage | Storage) => Promise<void> | void = vuexLocal.saveState;

vuexLocal.restoreState = (key: string, storage?: AsyncStorage | Storage) => {
  const state = localRestoreState(key, storage);
  if (state instanceof Promise) {
    state.then((loadedState: RootModel) => {
      RootEditor.initialState = loadedState;
    });
  } else {
    RootEditor.initialState = state;
  }

  return localRestoreState(key, storage); // Do it again to ensure deep clone
};
vuexLocal.saveState = (key: string, state: {}, storage?: AsyncStorage | Storage) => {
  return localSaveState(key, state, storage);
};


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
      console.log('initialState: ' + RootEditor.initialState.units[0].ancestryId);
      if (RootEditor.initialState) {
        this.replaceState(_.cloneDeep(RootEditor.initialState));
      } else {
        // TODO: rectify
        this.replaceState(new RootModel());
      }
    },
    changeUnitField: (state, { unitId, field, value }:
      { unitId: string, field: keyof UnitModel, value: any}) => {
      console.log('change from ' + getUnit(state, unitId)[field] + ' to ' + value);
      getUnit(state, unitId)[field] = value;
    },
    changeTitle: (state, { id, title }) => {
      getUnit(state, id).title = title;
    },
    changeAncestry: (state, {id, ancestryId}) => {
      getUnit(state, id).ancestryId = ancestryId;
    },
    addUnit: (state, { unit }: {unit: UnitModel}) => {
      state.units.push(unit);
      const army = getArmy(state, unit.owningArmyId);
      if (army) {
        army.unitIds.push(unit.id);
      }
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
    },
    setArmies: (state, { armies }: {armies: ArmyModel[]}) => {
      state.armies = armies;
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

function getUnit(state: RootModel, id: string): UnitModel {
  return state.units.find((unit) => unit.id === id)!;
}

function getArmy(state: RootModel, id: string): ArmyModel {
  return state.armies.find((army) => army.id === id)!;
}
