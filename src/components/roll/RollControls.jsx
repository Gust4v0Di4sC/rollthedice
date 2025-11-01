export const RollControls = ({ quantity, modifier, onQuantityChange, onModifierChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-white font-semibold mb-2">Quantidade</label>
        <input
          type="number"
          min="1"
          max="20"
          value={quantity}
          onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div>
        <label className="block text-white font-semibold mb-2">Modificador</label>
        <input
          type="number"
          value={modifier}
          onChange={(e) => onModifierChange(parseInt(e.target.value) || 0)}
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    </div>
  );
};