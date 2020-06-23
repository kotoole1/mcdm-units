import {randomId} from '@/models/uuid';
import * as _ from 'lodash';

import {ArmyModel} from '@/models/armyModel';
import {createDefaultArmies, createDefaultUnits, NO_ARMY_ID} from '@/models/defaultRootModel';
import {RootModel, RootModelVersionNumber} from '@/models/rootModel';
import {UnitModel} from '@/models/unitModel';
import {removeIf} from '@/models/utils';
import RootEditor from '@/components/rootEditor.vue';
import VuexPersistence, {AsyncStorage} from 'vuex-persist';

/**
 * All user data is stored in a single RootModel, which is stored in browser local storage so a user doesn't lose work,
 * and also never has to log in.
 */
export const vuexLocal = new VuexPersistence<RootModel>({
  storage: window.localStorage,
});

const localRestoreState: (key: string, storage?: AsyncStorage | Storage) => Promise<RootModel> | RootModel = vuexLocal.restoreState;
const localSaveState: (key: string, state: {}, storage?: AsyncStorage | Storage) => Promise<void> | void = vuexLocal.saveState;

vuexLocal.restoreState = (key: string, storage?: AsyncStorage | Storage) => {
  const state = localRestoreState(key, storage);
  // rectifyState(state);
  if (state instanceof Promise) {
    state.then((loadedState: RootModel) => {
      setInitialState(loadedState);
    });
  } else {
    setInitialState(state);
  }

  return state;
};

vuexLocal.saveState = (key: string, state: {}, storage?: AsyncStorage | Storage) => {
  return localSaveState(key, state, storage);
};

/**
 * Handle old versions and corrupted data. The goal here is: No matter
 * how bad the data is, something should be rendered without throwing
 */
function rectifyState(state: RootModel): void {
  if (!state.version) {
    state.version = RootModelVersionNumber.INITIAL_VERSION;
  }

  if (!state.armies || !state.armies.length) {
    state.armies = createDefaultArmies();
  }
  if (!state.units || !state.units.length) {
    state.units = createDefaultUnits();
  }

  const armies: ArmyModel[] = state.armies;
  const armiesById: {[key: string]: ArmyModel} = armies.reduce((indexed: {[key: string]: ArmyModel}, army) => {
    indexed[army.id] = army;
    return indexed;
  }, {});

  const defaultUnit = new UnitModel('fakeId', NO_ARMY_ID);
  if (state.units.length) {
    state.units.forEach((unit: UnitModel) => {
      if (!unit.owningArmyId || !armiesById[unit.owningArmyId]) {
        unit.owningArmyId = NO_ARMY_ID;
      }

      mergeInDefaults(unit, defaultUnit);

      // unit.owningArmyId is the source of truth - fix armies if needed.
      if (!armiesById[unit.owningArmyId].unitIds.includes(unit.id)) {
        armiesById[unit.owningArmyId].unitIds.push(unit.id);
      }
      removeIf(unit.traitIds, (id) => !!id);
      removeIf(unit.orderIds, (id) => !!id);
    });
  }

  if (!state.selectedItemId && state.units.length) {
    state.selectedItemId = state.units[0].id;
  }
}

function mergeInDefaults(loaded: any, defaults: any) {
  if (defaults.id && !loaded.id) {
    loaded.id = randomId();
  }

  for (const key in defaults) {
    if (Object.prototype.hasOwnProperty.call(defaults, key)
        && loaded[key] === undefined || loaded[key] === null) {
      loaded[key] = defaults[key];
    }
  }
}

function setInitialState(state: RootModel): void {
  rectifyState(state);
  RootEditor.initialState = _.cloneDeep(state);
}
