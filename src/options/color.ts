import {DropdownOption} from '@/components/dropdownOption';

export interface UnitColor extends DropdownOption {
  cssClass: string;
}

export const ColorOptions: {[key: string]: UnitColor } = {
  RED: {
    name: 'Red',
    cssClass: 'red-army',
  },
  BLUE: {
    name: 'Blue',
    cssClass: 'blue-army',
  },
  GREEN: {
    name: 'Green',
    cssClass: 'green-army',
  },
  BLACK: {
    name: 'Black',
    cssClass: 'black-army',
  },
};
