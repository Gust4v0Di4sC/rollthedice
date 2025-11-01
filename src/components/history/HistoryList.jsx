import { Dices } from "lucide-react";
import { Trash2 } from "lucide-react";
import { HistoryItem } from "./HistoryItem";
import { History } from "lucide-react";

export const HistoryList = ({ history, onClear }) => {
  if (history.length === 0) {
    return (
      <div className="text-center py-12 text-purple-200">
        <Dices className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p className="text-lg">Nenhuma rolagem ainda. Role os dados para começar!</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <History className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold text-white">Histórico de Rolagens</h2>
        </div>
        <button
          onClick={onClear}
          className="flex items-center gap-2 px-4 py-2 bg-red-500/80 hover:bg-red-600 rounded-lg text-white transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Limpar
        </button>
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {history.map(roll => (
          <HistoryItem key={roll.id} roll={roll} />
        ))}
      </div>
    </>
  );
};