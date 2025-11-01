import {Dices} from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Dices className="w-10 h-10 text-yellow-400" />
        <h1 className="text-4xl font-bold text-white">RPG Dice Roller</h1>
      </div>
      <p className="text-purple-200">Role seus dados e acompanhe o histórico</p>
    </div>
  );
};