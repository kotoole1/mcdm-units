import {HomebrewType} from '@/options/homebrew';
import {ClosedCallbackData} from '@/options/homebrewEditorAnimation';
import {OptionSource} from '@/options/optionSource';

export interface EditOptionData {
  option?: PopulatedDropdownOption;
  finishedEditCallback: (data: ClosedCallbackData) => void;
  homebrewType: HomebrewType;
  iconPosition?: ClientRect;
}

export interface DropdownOption {
  id?: string;
  name?: string;
  dropdownName?: string;
  label?: string;
  source?: OptionSource;
  skipDropdown?: boolean; // TODO
}

export interface PopulatedDropdownOption extends DropdownOption {
  id: string; // Not optional
  label: string; // Not optional
}

export function getDropdownOptionsForDisplay(originalOptions: {[key: string]: DropdownOption }): PopulatedDropdownOption[] {
  const optionsToDisplay: PopulatedDropdownOption[] = [];
  Object.keys(originalOptions).forEach((key: string) => {
    const option = originalOptions[key];
    option.id = key;
    option.label = option.dropdownName || option.name || option.id;
    optionsToDisplay.push(<PopulatedDropdownOption> option);
  });
  return optionsToDisplay;
}
