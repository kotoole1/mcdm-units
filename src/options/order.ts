export interface Order {
  name: string;
  dropdownName?: string;
  description: string;
}

export const Orders: {[key: string]: Order } = {
  STAND_YOUR_GROUND: {
    name: 'Stand Your Ground',
    description: 'Once per battle, for the next round all successful enemy Power checks against this unit must be rerolled.',
  },
  THE_ODDS: {
    name: 'May the odds be never in your favor',
    description: 'Choose an enemy unit, and place a d12 on their unit card. The next time that unit attacks, it rolls a d12 in place of a d20 on the attack check',
  },
  BLOT_OUT_THE_SUN: {
    name: 'Our arrows will blot out the sun',
    description: 'Make an attack roll at with advantage. A successful attack roll will engage the attacked unit. Make the power check with disadvantage',
  },
  CHARGE: {
    name: 'Charge',
    description: 'Cannot use while engaged. When attacking, attack with advantage on the Attack check. On a successful Power check, inflict 2 casualties. The charging unit is then engaged with the defending unit and must make a DC 13 Morale check to disengage.',
  },
  CHARGE_BRIEF: {
    name: 'Charge',
    dropdownName: 'Charge (brief)',
    description: 'When disengaged, attack with advantage. On a successful Power check, inflict 2 casualties and become engaged (DC 13 Morale check to disengage).',
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
    description: 'An enemy unit the Gaggle of Geldar successfully attack become distracted for the rest of the round. The Eyes of Trodden gain advantage on Attack and Power checks against the distracted unit.',
  },
  DISTRACT_THEM_REVERSE: {
    name: 'Distract them',
    description: 'An enemy unit the Eyes of Trodden successfully attack become distracted for the rest of the round. The Gaggle of Geldar gains advantage on Attack and Power checks against the distracted unit.',
  },
  FOR_RAVENOVIA: {
    name: 'For Ravenovia',
    description: 'When diminished, make a DC 15 morale check. If successful, increase the casualty die by 1.',
  },
  CAPTIVATE: {
    name: 'Captivate',
    description: '(Twice per battle) This unit sings a captivating song. One unit must succeed on a DC15 morale check, or the Windpipes may attack the captivated unit with advantage and the unit spends the next round captivated by the music.',
  },
};
