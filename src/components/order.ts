export interface Order {
  name: string;
  description: string;
}

export const Orders: {[key: string]: Order } = {
  STAND_YOUR_GROUND: {
    name: 'Stand Your Ground',
    description: 'Once per battle, for the next round all successful enemy Power checks against this unit must be rerolled.',
  },
  THE_ODDS: {
    name: 'May the odds be never in your favor',
    description: 'Choose an enemy unit, and place a d12 on their unit card. The next time that unit attacks, it rolls a d12 in place of a d20',
  },
  CHARGE: {
    name: 'Charge',
    description: '',
  },
  TAKE_AIM: {
    name: 'Take aim',
    description: 'Attack rolls for the next round are rolled with advantage.',
  },
  CONSUME: {
    name: 'Consume',
    description: 'If there is a diminished enemy unit, this unit spends round feeding on the corpses. Increment this unit\'s casualty die.',
  },
  LEND_HAND: {
    name: 'Lend them a hand',
    description: 'In addition to attacking this round, this unit attacks another unit by dismembering their arms and hurling them across the battlefield. After the attack, decrease this unit\'s casualty die by 1.',
  },
  DISTRACT_THEM: {
    name: 'Distract them',
    description: 'An enemy unit the Martikovs successfully attack become distracted for the rest of the round. The Keepers of the Feather gain advantage on Attack and Power checks against the distracted unit.',
  },
  DISTRACT_THEM_REVERSE: {
    name: 'Distract them',
    description: 'An enemy unit the Keepers of the Feather successfully attack become distracted for the rest of the round. The Martikov Clan gains advantage on Attack and Power checks against the distracted unit.',
  },
  FOR_RAVENOVIA: {
    name: 'For Ravenovia',
    description: 'When diminished, make a DC 15 morale check. If successful, increase the casualty die by 1.',
  },
};
