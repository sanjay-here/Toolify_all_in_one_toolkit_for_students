import React from 'react';

interface TimeInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
}

export default function TimeInput({ label, value, onChange, max }: TimeInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        type="number"
        min="0"
        max={max}
        value={value}
        onChange={(e) => onChange(Math.min(parseInt(e.target.value) || 0, max))}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md 
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
      />
    </div>
  );
}