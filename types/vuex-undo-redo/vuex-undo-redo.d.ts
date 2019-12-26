import {Vue} from 'vue/types/vue';

declare module 'vue/types/options' {
  export interface VuexUndoRedo<V extends Vue> {
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
  }
}
