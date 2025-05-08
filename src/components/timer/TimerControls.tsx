import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function TimerControls({ isRunning, onStart, onPause, onReset }: TimerControlsProps) {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={isRunning ? onPause : onStart}
        className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 
                 transition-colors duration-200"
      >
        {isRunning ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button
        onClick={onReset}
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      >
        <RotateCcw size={24} />
      </button>
    </div>
  );
}