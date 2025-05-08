import React from 'react';

interface TimerDisplayProps {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds?: number;
  showMilliseconds?: boolean;
}

export default function TimerDisplay({ 
  hours, 
  minutes, 
  seconds, 
  milliseconds = 0,
  showMilliseconds = false 
}: TimerDisplayProps) {
  const formatNumber = (num: number): string => num.toString().padStart(2, '0');
  const formatMs = (ms: number): string => Math.floor(ms / 10).toString().padStart(2, '0');

  return (
    <div className="text-6xl font-mono font-bold text-center space-x-2">
      <span className="text-gray-900 dark:text-white">{formatNumber(hours)}</span>
      <span className="text-gray-400">:</span>
      <span className="text-gray-900 dark:text-white">{formatNumber(minutes)}</span>
      <span className="text-gray-400">:</span>
      <span className="text-gray-900 dark:text-white">{formatNumber(seconds)}</span>
      {showMilliseconds && (
        <>
          <span className="text-gray-400">.</span>
          <span className="text-gray-900 dark:text-white text-4xl">{formatMs(milliseconds)}</span>
        </>
      )}
    </div>
  );
}