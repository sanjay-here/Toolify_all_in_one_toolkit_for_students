import React from 'react';
import { formatNumber } from '../../utils/conversion';

interface ResultDisplayProps {
  results: {
    label: string;
    value: number;
    unit: string;
  }[];
}

export default function ResultDisplay({ results }: ResultDisplayProps) {
  return (
    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg space-y-3">
      {results.map(({ label, value, unit }) => (
        <div key={label}>
          <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            {formatNumber(value)} {unit}
          </div>
        </div>
      ))}
    </div>
  );
}