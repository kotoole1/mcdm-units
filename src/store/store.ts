import {RootModel} from '@/models/rootModel';
import {UnitModel} from '@/models/unitModel';
import {randomId} from '@/models/uuid';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store<RootModel>({
  state: new RootModel(new UnitModel(randomId())),
  mutations: {
    changeTitle: (state, { id, title }) => {
      getUnit(state, id).title = title;
    },
    changeAncestry: (state, {id, title}) => {
      getUnit(state, id).title = title;
    },
  },
  getters: {
    unit: (state) => (id: string) => {
      return getUnit(state, id);
    },
  },
});

function getUnit(state: RootModel, id: string): UnitModel {
  return state.units.find((unit) => unit.id === id)!;
}
