import {Order} from '@/options/order';

export interface Condition {
  name: string;
  dropdownName?: string;
  description: string;
}

export const Conditionss: {[key: string]: Order } = {
  NARROW_DIES: {
    name: 'If the casualty die decreases to 2',
    description: 'Narrow Winston dies in battle',
  },
};
