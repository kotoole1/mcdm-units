import {DropdownOption} from '@/components/dropdownOption';

export interface Condition extends DropdownOption {
  name: string;
  description: string;
}

export const Conditions: {[key: string]: Condition } = {
  SIZE_5: {
    name: 'Vulnerable',
    description: 'Subtract this unit\'s current casualty die from its defense. When this unit\'s size is 5 or higher, it may be attacked by the unit inside it.'
  },
  SIZE_6: {
    name: 'Banish',
    description: 'When this unit\'s casualty die reaches 6, the unit to banish is surrounded, and is immediately teleported to the astral plane.'
  },
}
