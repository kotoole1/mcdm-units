import {OptionSource} from '@/options/optionSource';

export interface DropdownOption {
  id?: string;
  name?: string;
  label?: string;
  source?: OptionSource;
  skipDropdown?: boolean; // TODO
}
