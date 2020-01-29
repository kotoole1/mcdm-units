import {DropdownOption} from '@/components/dropdownOption';

export interface ItemType extends DropdownOption {
  name: string;
}

export const ItemTypeOptions: {[key: string]: ItemType} = {
  UNIT: {
    name: "Unit",
  },
  ITEM: {
    name: "Item",
  },
  SPELL: {
    name: "Spell",
  },
};
