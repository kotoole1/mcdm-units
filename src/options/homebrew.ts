import {randomId} from '@/models/uuid';
import {Ancestry} from '@/options/ancestry';
import {Trait} from '@/options/trait';
import {Order} from '@/options/order';

export enum HomebrewType {
  ANCESTRY,
  TRAIT,
  ORDER,
}

export type HomebrewItem = Ancestry | Trait | Order;

export function getTypeName(type: HomebrewType) {
  switch (type) {
    case HomebrewType.ANCESTRY:
      return 'Ancestry';
    case HomebrewType.TRAIT:
      return 'Trait';
    case HomebrewType.ORDER:
      return 'Order';
  }
}
