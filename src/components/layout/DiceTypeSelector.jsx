

export const DiceTypeSelector = ({ selectedDice, onSelectDice, diceTypes }) => {
  return (
    <div>
      <label className="block text-white font-semibold mb-3">Tipo de Dado</label>
      <div className="grid grid-cols-4 gap-2">
        {diceTypes.map(dice => (
          <button
            key={dice.value}
            onClick={() => onSelectDice(dice.value)}
            className={`py-3 px-2 rounded-lg font-bold transition-all transform hover:scale-105 ${
              selectedDice === dice.value
                ? 'bg-yellow-400 text-purple-900 shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {dice.label}
          </button>
        ))}
      </div>
    </div>
  );
};