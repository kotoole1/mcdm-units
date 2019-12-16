import {ArmyModel} from '@/models/armyModel';
import {RootModel} from '@/models/rootModel';
import {UnitModel} from '@/models/unitModel';
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
