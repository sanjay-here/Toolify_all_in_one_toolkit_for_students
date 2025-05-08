import React from 'react';
import { formatNumber } from '../../utils/conversion';

interface ConversionResultProps {
  value: string;
  unit: string;
}

export default function ConversionResult({ value, unit }: ConversionResultProps) {
  return (
    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Result</div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        {value ? `${formatNumber(parseFloat(value))} ${unit}` : '-'}
      </div>
    </div>
  );
}