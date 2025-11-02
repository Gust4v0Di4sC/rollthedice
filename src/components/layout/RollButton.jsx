import { Dices } from "lucide-react";

export const RollButton = ({ quantity, selectedDice, modifier, isRolling, onRoll }) => {
  const buttonText = isRolling 
    ? 'Rolando...' 
    : `Rolar ${quantity} ${selectedDice.toUpperCase()} ${modifier !== 0 ? ` ${modifier > 0 ? '+' : ''}${modifier}` : ''}`;

  return (
    <button
      onClick={onRoll}
      disabled={isRolling}
      className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform ${
        isRolling
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-linear-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 hover:scale-105 shadow-lg hover:shadow-xl'
      } text-gray-50`}
    >
      {isRolling ? (
        <span className="flex items-center justify-center gap-2">
          <Dices className="w-5 h-5 animate-spin" />
          {buttonText}
        </span>
      ) : (
        buttonText
      )}
    </button>
  );
};