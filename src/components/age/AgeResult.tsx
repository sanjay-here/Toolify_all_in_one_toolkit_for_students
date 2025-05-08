import React from 'react';

interface AgeResultProps {
  years: number;
  months: number;
  days: number;
}

export default function AgeResult({ years, months, days }: AgeResultProps) {
  return (
    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Age</div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{years}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{months}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Months</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{days}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Days</div>
        </div>
      </div>
    </div>
  );
}