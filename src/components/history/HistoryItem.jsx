export const HistoryItem = ({ roll }) => {
  return (
    <div className="bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <div>
          <span className="text-yellow-400 font-bold text-lg">
            {roll.quantity}{roll.dice.toUpperCase()}
            {roll.modifier !== 0 && ` ${roll.modifier > 0 ? '+' : ''}${roll.modifier}`}
          </span>
          <span className="text-purple-200 text-sm ml-3">{roll.timestamp}</span>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-white">{roll.total}</div>
          {roll.modifier !== 0 && (
            <div className="text-sm text-purple-200">
              ({roll.sum} {roll.modifier > 0 ? '+' : ''}{roll.modifier})
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {roll.rolls.map((value, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-orange-600 rounded-full text-white text-sm font-semibold"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};