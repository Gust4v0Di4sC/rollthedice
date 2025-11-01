import { useState } from "react";
import { DiceTypeSelector } from "../layout/DiceTypeSelector";
import { RollControls } from "./RollControls";
import { RollButton } from "../layout/RollButton";
import DiceService from "../../services/DiceService";
import { DICE_TYPES } from "../../constants/diceTypes";

export const RollerPanel = ({ onRollComplete }) => {
  const [selectedDice, setSelectedDice] = useState('d20');
  const [quantity, setQuantity] = useState(1);
  const [modifier, setModifier] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = async () => {
    setIsRolling(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const diceInfo = DiceService.getDiceInfo(selectedDice);
      const rolls = DiceService.rollDice(diceInfo.sides, quantity);
      const rollResult = DiceService.createRollResult(selectedDice, quantity, modifier, rolls);
      
      onRollComplete(rollResult);
    } catch (error) {
      console.error('Erro ao rolar dados:', error);
    } finally {
      setIsRolling(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-6 border border-white/20 shadow-2xl">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <DiceTypeSelector 
          selectedDice={selectedDice}
          onSelectDice={setSelectedDice}
          diceTypes={DICE_TYPES}
        />
        <RollControls
          quantity={quantity}
          modifier={modifier}
          onQuantityChange={setQuantity}
          onModifierChange={setModifier}
        />
      </div>
      <RollButton
        quantity={quantity}
        selectedDice={selectedDice}
        modifier={modifier}
        isRolling={isRolling}
        onRoll={handleRoll}
      />
    </div>
  );
};