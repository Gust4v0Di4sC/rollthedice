import { Header } from './components/layout/Header';
import { RollerPanel } from './components/roll/RollerPanel';
import { HistoryList } from './components/history/HistoryList';
import { useRollHistory } from './hooks/useRollHistory';

export default function App() {
  const { history, addRoll, clearHistory } = useRollHistory();
  
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-700 to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <Header />
        <RollerPanel onRollComplete={addRoll} />
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
          <HistoryList history={history} onClear={clearHistory} />
        </div>
      </div>
    </div>
  );
}