import { useState } from 'react';

export const useRollHistory = () => {
  const [history, setHistory] = useState([]);
  
  const addRoll = (rollResult) => {
    setHistory(prev => [rollResult, ...prev]);
  };

  const clearHistory = () => {
    setHistory([]);
  };
  
  return { history, addRoll, clearHistory };
};