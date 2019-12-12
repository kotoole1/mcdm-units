import {RootModel} from '@/models/rootModel';
import {UnitModel} from '@/models/unitModel';
import {randomId} from '@/models/uuid';
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';


Vue.use(Vuex);

const vuexLocal = new VuexPersistence<RootModel>({
  storage: window.localStorage,
});

export default new Vuex.Store<RootModel>({
  state: new RootModel(), // VuexPersistence should override this
  mutations: {
    changeUnitField: (state, { unitId, field, value }:
      { unitId: string, field: keyof UnitModel, value: any}) => {
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
    },
  },
  getters: {
    unit: (state) => (id: string) => {
      return getUnit(state, id);
    },
    allUnits: (state) => {
      return state.units;
    },
  },
  plugins: [vuexLocal.plugin]
});

function getUnit(state: RootModel, id: string): UnitModel {
  return state.units.find((unit) => unit.id === id)!;
}
