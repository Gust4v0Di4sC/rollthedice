import { DICE_TYPES } from '../constants/diceTypes';

class DiceService {
 static rollDice(sides, quantity) {
    const rolls = [];
    for (let i = 0; i < quantity; i++) {
      rolls.push(Math.floor(Math.random() * sides) + 1);
    }
    return rolls;
  }

  static calculateTotal(rolls, modifier) {
    const sum = rolls.reduce((acc, val) => acc + val, 0);
    return sum + modifier;
  }

  static createRollResult(diceType, quantity, modifier, rolls) {
    const sum = rolls.reduce((acc, val) => acc + val, 0);
    const total = sum + modifier;

    return {
      id: Date.now(),
      dice: diceType,
      quantity,
      modifier,
      rolls,
      sum,
      total,
      timestamp:  Date().toLocaleString('pt-BR')
    };
  }

  static getDiceInfo(diceValue) {
    return DICE_TYPES.find(d => d.value === diceValue);
  }
}

export default DiceService;