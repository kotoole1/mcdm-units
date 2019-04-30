export interface Order {
  name: string;
  description: string;
}

export const Orders: {[key: string]: Order } = {
  STAND_YOUR_GROUND: {
    name: 'Stand Your Ground',
    description: 'Once per battle, for the next round all successful enemy Power checks against this unit must be rerolled.',
  },
};
