import {PopulatedDropdownOption} from '@/components/dropdownOption';
import {Vue} from 'vue-property-decorator';

export enum CloseStatus {
  CONFIRMED,
  DELETED,
}

export interface ClosedCallbackData {
  status: CloseStatus;
}

export interface WithAnimationPosition extends Vue {
  getElement(): Element;
  setVisibility(isVisible: boolean): void;
  startDurationEffects(): void;
  stopDurationEffects(): void;
}
